import React, { useState, useEffect } from 'react';
import estilos from './modal.module.css';
import StarRating from '../StarRating';
import { addAvaliacao } from '../../services/rating';
import { getProfessorByEmail } from '../../services/professors';

const Modal = ({ isOpen, closeModal, type, bio, professorEmail }) => {
    const [ratings, setRatings] = useState({
        disponibilidade: 0,
        materiaisDeApoio: 0,
        didatica: 0,
        coerenciaDeAvaliacao: 0,
        metodologia: 0,
    });
    const [error, setError] = useState(null);
    const [professor, setProfessor] = useState(null);

    useEffect(() => {
        const fetchProfessor = async () => {
            try {
                const response = await getProfessorByEmail(professorEmail);
                setProfessor(response.data);
            } catch (error) {
                console.error('Erro ao buscar professor:', error);
                setError('Erro ao buscar dados do professor.');
            }
        };

        if (professorEmail) {
            fetchProfessor();
        }
    }, [professorEmail]);

    const handleRatingChange = (criteria, rating) => {
        setRatings({ ...ratings, [criteria]: rating });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!professor) {
            setError('Professor não encontrado.');
            return;
        }

        const { email: professorId } = professor;

        try {
            await addAvaliacao({
                professorId,
                ...ratings,
            });
            alert('Avaliação enviada com sucesso!');
            setError(null);
            closeModal();
        } catch (error) {
            console.error('Erro ao enviar avaliação:', error);
            setError('Erro ao enviar avaliação. Por favor, tente novamente.');
        }
    };

    const handleClickOutside = (event) => {
        if (event.target.className.includes(estilos.modal)) {
            closeModal();
        }
    };

    if (!isOpen) return null;

    return (
        <div id="myModal" className={estilos.modal} onClick={handleClickOutside}>
            <div className={estilos['modal-content']}>
                <span className={estilos.closeBtn} onClick={closeModal}>&times;</span>
                {type === 'review' && (
                    <>
                        <h2 className={estilos['modal-titulo']}>Avalie:</h2>
                        <form id="ratingForm" onSubmit={handleSubmit}>
                            <div className={estilos['rating-criteria']}>
                                <label htmlFor="disponibilidade">Disponibilidade:</label>
                                <StarRating
                                    stars={ratings.disponibilidade}
                                    onStarClick={(rating) => handleRatingChange('disponibilidade', rating)}
                                />
                            </div>
                            <div className={estilos['rating-criteria']}>
                                <label htmlFor="materiaisDeApoio">Materiais de apoio:</label>
                                <StarRating
                                    stars={ratings.materiaisDeApoio}
                                    onStarClick={(rating) => handleRatingChange('materiaisDeApoio', rating)}
                                />
                            </div>
                            <div className={estilos['rating-criteria']}>
                                <label htmlFor="didatica">Didática:</label>
                                <StarRating
                                    stars={ratings.didatica}
                                    onStarClick={(rating) => handleRatingChange('didatica', rating)}
                                />
                            </div>
                            <div className={estilos['rating-criteria']}>
                                <label htmlFor="coerenciaDeAvaliacao">Coerência de avaliações:</label>
                                <StarRating
                                    stars={ratings.coerenciaDeAvaliacao}
                                    onStarClick={(rating) => handleRatingChange('coerenciaDeAvaliacao', rating)}
                                />
                            </div>
                            <div className={estilos['rating-criteria']}>
                                <label htmlFor="metodologia">Metodologia:</label>
                                <StarRating
                                    stars={ratings.metodologia}
                                    onStarClick={(rating) => handleRatingChange('metodologia', rating)}
                                />
                            </div>
                            <button className={estilos['send-button']} type="submit">Enviar Avaliação</button>
                        </form>
                        {error && <p className={estilos.error}>{error}</p>}
                    </>
                )}
                {type === 'bio' && (
                    <>
                        <h2 className={estilos['bio-titulo']}>Biografia Completa</h2>
                        <p className={estilos['bio-texto']}>{bio}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Modal;
