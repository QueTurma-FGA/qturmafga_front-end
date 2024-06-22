import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import logoQturmaFGA from '../../assets/logoQTurmaFGA.png';
import styles from './professors.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getProfessorsByDisciplineCode } from '../../services/professors';
import { CiMail } from "react-icons/ci";

const Professors = () => {
  const { discipline } = useParams();
  const [professors, setProfessors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const response = await getProfessorsByDisciplineCode(discipline);
        setProfessors(response.data);
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
    <div>
      <Header />
      <main>
        <div id="principal">
          <div className={styles['resultados-exibidos']}>
            <p>Exibindo resultados para {discipline}</p>
          </div>
          <section id="resultados" className={styles['caixa-principal']}>
            {professors.map((professor) => (
              <article key={professor.email} className={styles['boxresultado']}>
                <div className={styles['boxcabecalho']}>
                  <h1>{professor.nome}</h1>
                  <h2>{professor.unidade}</h2>
                </div>
                <div className={styles['boxcorpo']}>
                  <div className={styles['profilepic-box']}>
                    <img src={professor.fto} alt={`${professor.nome}`} width="100" />
                  </div>
                  <div className={styles['avaliacao-box']}>
                    <h1>AVALIAÇÃO MÉDIA</h1>
                    <div className={styles['stars']}>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>
                  </div>
                  <div className={styles['highlights-box']}>
                    <h1>DESTAQUES</h1>
                    <div className={styles['lista-destaques']}>
                      <ul>
                        <li>Atencioso</li>
                        <li>Didático</li>
                        <li>Organizado</li>
                        <li>Inspirador</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles['bio-box']}>              
                    <div className={styles['contato']}> 
                      <a href={`mailto:${professor.email}`} className={styles['contato']}><CiMail />{professor.email}</a>
                    </div>
                  </div>
                </div>
                <div className={styles['boxrodape']}>
                  <Link to={`/details/${professor.email}`} className={styles['ver-perfil']}>Ver Perfil</Link>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

export default Professors;
