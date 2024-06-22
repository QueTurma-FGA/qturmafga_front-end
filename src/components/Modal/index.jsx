import React, { useState } from 'react';
import estilos from './modal.module.css';
import StarRating from '../StarRating';

const Modal = ({ isOpen, closeModal, type, bio }) => {
    const [ratings, setRatings] = useState({
        disponibilidade: 0,
        materiais: 0,
        didatica: 0,
        coerencia: 0,
        metodologia: 0,
    });

    const handleRatingChange = (criteria, rating) => {
        setRatings({ ...ratings, [criteria]: rating });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Avaliação enviada: ' + JSON.stringify(ratings));
        closeModal();
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
                                <label htmlFor="materiais">Materiais de apoio:</label>
                                <StarRating
                                    stars={ratings.materiais}
                                    onStarClick={(rating) => handleRatingChange('materiais', rating)}
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
                                <label htmlFor="coerencia">Coerência de avaliações:</label>
                                <StarRating
                                    stars={ratings.coerencia}
                                    onStarClick={(rating) => handleRatingChange('coerencia', rating)}
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
