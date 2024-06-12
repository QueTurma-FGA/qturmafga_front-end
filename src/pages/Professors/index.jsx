import React from 'react';
import { useSearchParams } from 'react-router-dom';
import logoQturmaFGA from '../../assets/logoQTurmaFGA.png';
import styles from './professors.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CiMail } from "react-icons/ci";

const Professors = () => {
  const [searchParams] = useSearchParams();
  const discipline = searchParams.get("discipline");

  return (
    <div>
      <Header />
      <main>
        <div id="principal">
          <div className={styles['resultados-exibidos']}>
            <p>Exibindo resultados para {discipline}</p>
          </div>
          <section id="resultados">
            <article className={styles['boxresultado']}>
              <div className={styles['boxcabecalho']}>
                <h1>Sergio Antonio Andrade De Freitas</h1>
                <h2>FGA - FACULDADE DO GAMA</h2>
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
                  <h1>BIOGRAFIA</h1>
                  <p>
                    Professor Titular da Universidade de Brasília, onde ingressou em 2009. Anteriormente foi professor da Universidade Federal do Espírito Santo, onde ingressou em 1999. É professor e pesquisador da linha de pesquisa em Engenharia de Software do Programa de Pós-Graduação em Computação Aplicada da Universidade de Brasília.
                  </p>
                </div>
              </div>
              <div className={styles['boxrodape']}>
                <a href="mailto:professor@unb.br" className={styles['contato']}><CiMail />professor@unb.br</a>
                <a href="#" className={styles['ver-perfil']}>Ver Perfil</a>
              </div>
            </article>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Professors;
