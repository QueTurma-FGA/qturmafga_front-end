import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logoQturmaFGA from '../../assets/logoQTurmaFGA.png';
import styles from './professors.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CiMail } from "react-icons/ci";
import { getProfessorsByDisciplineCode } from '../../services/professors.jsx';

const Professors = () => {
  // const [searchParams] = useSearchParams();
  const { discipline } = useParams();
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const response = await getProfessorsByDisciplineCode(discipline);
        setProfessors(response.data.professors);
      } catch (error) {
        console.error("Error fetching professors:", error);
      }
    };

    if (discipline) {
      fetchProfessors();
    }
  }, [discipline]);

  return (
    <div>
      <Header />
      <main>
        <div id="principal">
          <div className={styles['resultados-exibidos']}>
            <p>Exibindo resultados para {discipline}</p>
          </div>
          <section id="resultados">
            {professors.map((professor) => (
              <article key={professor.professor.id} className={styles['boxresultado']}>
                <div className={styles['boxcabecalho']}>
                  <h1>{professor.professor.nome}</h1>
                  <h2>{professor.professor.unidade}</h2>
                </div>
                <div className={styles['boxcorpo']}>
                  <div className={styles['profilepic-box']}></div>
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
                    <h1>CONTATO</h1>
                    <a href={`mailto:${professor.professor.email}`} className={styles['contato']}>{professor.professor.email}</a>
                  </div>
                </div>
                <div className={styles['boxrodape']}>
                  <a href="#" className={styles['ver-perfil']}>Ver Perfil</a>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Professors;
