import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './professors.module.css';
import Header from '../../components/Header';
import { getProfessorsByDisciplineCode, getProfessorByEmail } from '../../services/professors';
import { getMediaAvaliacoes } from '../../services/rating';
import StarRating from '../../components/StarRating'; // Ajuste o caminho conforme necessário

// Função para capitalizar a primeira letra de cada palavra
const capitalizeFirstLetter = (str) => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const Professors = () => {
  const { discipline } = useParams();
  const [professors, setProfessors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const response = await getProfessorsByDisciplineCode(discipline);
        const professorsWithDetails = await Promise.all(
          response.data.map(async (professor) => {
            const professorDetails = await getProfessorByEmail(professor.email);
            const mediaAvaliacoes = await getMediaAvaliacoes(professor.email);
            return { 
              ...professor, 
              materias: professorDetails.data.materias,
              mediaGeral: mediaAvaliacoes.mediaGeral // Corrigido para acessar o campo correto
            };
          })
        );
        setProfessors(professorsWithDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (discipline) {
      fetchProfessors();
    }
  }, [discipline]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <>
      <Header />
      <main>
        <div className={styles['principal']}>
          <div className={styles['dinamic-hr']}>
            <p>Exibindo resultados para {discipline}</p>
          </div>
          <section id="resultados" className={styles['body']}>
            {professors.map((professor) => (
              <article key={professor.email} className={styles['result-box']}>
                <div className={styles['header-result-box']}>
                  <h1>{professor.nome}</h1>
                  <h2>{professor.unidade}</h2>
                </div>
                <div className={styles['box-body']}>
                  <div>
                    <img className={styles['profilepic-box']} src={professor.fto} alt={`${professor.nome}`} width="100" />
                  </div>
                  <div className={styles['rating-box']}>
                    <h1>AVALIAÇÃO MÉDIA</h1>
                    <div className={styles['stars-box']}>
                      <StarRating stars={Math.round(professor.mediaGeral)} />
                      <p>{professor.mediaGeral !== undefined ? professor.mediaGeral : 'N/A'}</p>
                    </div>
                  </div>
                  <div className={styles['highlights-box']}>
                    <h1>DESTAQUES</h1>
                    <div className={styles['highlights-list']}>
                      <ul>
                        <li>Metodologia</li>
                        <li>Didática</li>
                        <li>Materiais</li>
                        <li>Disponibilidade</li>
                        <li>Coerência</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles['bio-box']}>
                    <h1>DISCIPLINAS MINISTRADAS</h1>
                    <ul>
                      {professor.materias && professor.materias.length > 0 ? (
                        professor.materias.map((materia, index) => (
                          <li key={index}>{capitalizeFirstLetter(materia.materia.nome)}</li>
                        ))
                      ) : (
                        <li>Sem disciplinas cadastradas</li>
                      )}
                    </ul>
                  </div>
                </div>
                <div className={styles['box-footer']}>
                  <Link to={`/details/${professor.email}`} className={styles['see-profile-button']}>Ver Perfil</Link>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  );
};

export default Professors;
