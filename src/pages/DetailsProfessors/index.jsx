import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from '../../components/StarRating';
import Modal from '../../components/Modal';
import estilos from './details.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import 'font-awesome/css/font-awesome.min.css';
import { getProfessorByEmail } from '../../services/professors';

const DetailsProfessors = () => {
  const { email } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [professor, setProfessor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfessor = async () => {
      try {
        const response = await getProfessorByEmail(email);
        setProfessor(response.data);
      } catch (error) {
        console.error('Erro ao buscar professor:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfessor();
  }, [email]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (loading) return <p>Carregando...</p>;
  if (!professor) return <p>Erro ao carregar professor.</p>;

  return (
    <>
      <Header />
      <div className={estilos.hr}></div>
      <main className={estilos.main}>
        <div id="resultado" className={estilos.resultado}>
          <div id="box" className={estilos.box}>
            <div id="first-column" className={estilos.firstColumn}>
              <div id="profilepic-box" className={estilos.profilepicBox}>
                <img src={professor.fto} alt={`${professor.nome}`} width="100" />
              </div>
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
              <h1 id="name-professor" className={estilos.nameProfessor}>{professor.nome}</h1>
              <h2 className={estilos.discplinas_ministradas_titulo}>Disciplinas Ministradas:</h2>
              <ul>
                {professor.materias && professor.materias.length > 0 ? (
                  professor.materias.map((materia, index) => (
                    <li key={index}>{materia.materia.nome}</li>
                  ))
                ) : (
                  <li>Sem disciplinas cadastradas</li>
                )}
              </ul>
            </div>
            <div id="third-column" className={estilos.thirdColumn}>
              <h2>Biografia:</h2>
              <p id="biografia-completa" className={estilos.biografiaCompleta}>
                {professor.bio}
              </p>
            </div>
          </div>
          <div id="footer-box" className={estilos.footerBox}>
            <button onClick={openModal} className={estilos.avaliacaoButton}>Fazer Avaliação</button>
            <button className={estilos.contatoButton}>Contato</button>
          </div>
        </div>
        <Modal isOpen={isModalOpen} closeModal={closeModal} />
      </main>
      <Footer />
    </>
  );
};

export default DetailsProfessors;
