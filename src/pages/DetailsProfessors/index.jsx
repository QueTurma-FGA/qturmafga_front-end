import React, { useState } from 'react';
import StarRating from '../../components/StarRating';
import Modal from '../../components/Modal';
import estilos from './details.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import 'font-awesome/css/font-awesome.min.css';

const DetailsProfessors = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
        <Header/>
        <div className={estilos.hr}>
            </div>
        <main className={estilos.main}>
            <div id="resultado" className={estilos.resultado}>
                <div id="box" className={estilos.box}>
                    <div id="first-column" className={estilos.firstColumn}>
                        <div id="profilepic-box" className={estilos.profilepicBox}></div>
                        <div className={`${estilos.avaliacoes} ${estilos.didatica}`}>
                            <h2>Didática: </h2>
                            <StarRating stars={3} />
                        </div>
                        <div className={`${estilos.avaliacoes} ${estilos.materiais}`}>
                            <h2>Materiais de apoio: </h2>
                            <StarRating stars={3} />
                        </div>
                        <div className={`${estilos.avaliacoes} ${estilos.disponibilidade}`}>
                            <h2>Disponibilidade: </h2>
                            <StarRating stars={3} />
                        </div>
                        <div className={`${estilos.avaliacoes} ${estilos.coerencia}`}>
                            <h2>Coerência das avaliações: </h2>
                            <StarRating stars={3} />
                        </div>
                        <div className={`${estilos.avaliacoes} ${estilos.metodologia}`}>
                            <h2>Metodologia: </h2>
                            <StarRating stars={3} />
                        </div>
                    </div>
                    <div id="second-column" className={estilos.secondColumn}>
                        <h1 id="name-professor" className={estilos.nameProfessor}> Sérgio Alcântara Machado</h1>
                    </div>
                    <div id="third-column" className={estilos.thirdColumn}>
                        <h2>Biografia:</h2>
                        <p id="biografia-completa" className={estilos.biografiaCompleta}>
                            Pós-Doutorado em Design de Transporte e Ergonomia do Produto pela Universidade de Quebec em Montreal - UQÀM (2015). - Doutorado em Ciências Mecânicas pela Universidade de Brasília (2014). - Mestrado em Engenharia Aeronáutica e Mecânica pelo Instituto Tecnológico de Aeronáutica / ITA (2004). - Graduação em Engenharia Mecânica pela Universidade de Brasília (2000) Professor Adjunto da Universidade de Brasília - UnB (Campus Gama) nos Cursos de Engenharia Automotiva e de Engenharia Aeroespacial, ministrando disciplinas e desenvolvendo pesquisas nas áreas de Design Automotivo, Ergonomia do Produto e Sistemas Aeroespaciais. Experiência profissional nas áreas de Engenharia Mecânica, Engenharia Aeronáutica, Design de Produto e Ergonomia, incluindo trabalhos desenvolvidos na EMBRAER (2004-2009), onde atuou como engenheiro de desenvolvimento do produto. Também atuou profissionalmente nas áreas automação e inspeção veicular. Membro do Laboratório de Arte e Tecnociência - LART, desenvolvendo pesquisas nas áreas de Projeto de Produto, Design, Ergonomia, Simulação e Realidade Virtual.
                        </p>
                    </div>
                </div>
                <div id="footer-box" className={estilos.footerBox}>
                    <button className={estilos.contatoButton}>Contato</button>
                    <button onClick={openModal} className={estilos.avaliacaoButton}>Fazer Avaliação</button>
                </div>
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} />
        </main>
        <Footer/>
        </>
    );
};

export default DetailsProfessors;
