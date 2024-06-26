import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";
import StarRating from '../../components/StarRating';
import Modal from '../../components/Modal';
import estilos from './details.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import 'font-awesome/css/font-awesome.min.css';
import { getProfessorByEmail } from '../../services/professors';

const DetailsProfessors = () => {
  const { email } = useParams();
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);
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

  const openReviewModal = () => setIsReviewModalOpen(true);
  const closeReviewModal = () => setIsReviewModalOpen(false);

  const openBioModal = () => setIsBioModalOpen(true);
  const closeBioModal = () => setIsBioModalOpen(false);

  if (loading) return <p>Carregando...</p>;
  if (!professor) return <p>Erro ao carregar professor.</p>;

  const bioTruncated = professor.bio.length > 500 ? `${professor.bio.substring(0, 500)}...` : professor.bio;

  return (
    <>
      <Header />
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
              <h2>Biografia:</h2>
              <p id="biografia-completa" className={estilos.biografiaCompleta}>
                {bioTruncated}
                {professor.bio.length > 500 && (
                  <a href="#" onClick={openBioModal} className={estilos.readMoreButton}>Leia mais</a>
                )}
              </p>
            </div>

            <div id="third-column" className={estilos.thirdColumn}>
              <div className={estilos.contactBox}>
                <a href={`mailto:${professor.email}`}><IoMdMail /> </a>
                <a href={`mailto:${professor.email}`}>{professor.email}</a>
              </div>
            </div>
          </div>
          
          <div id="footer-box" className={estilos.footerBox}>
            <button onClick={openReviewModal} className={estilos.avaliacaoButton}>Fazer Avaliação</button>
          </div>
        </div>
        <Modal isOpen={isReviewModalOpen} closeModal={closeReviewModal} type="review" professorEmail={email} />
        <Modal isOpen={isBioModalOpen} closeModal={closeBioModal} type="bio" bio={professor.bio} />
      </main>
      <Footer />
    </>
  );
};

export default DetailsProfessors;
