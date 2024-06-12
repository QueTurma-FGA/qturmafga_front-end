import React from 'react';
import estilos from './StarRating.module.css';

const StarRating = ({ stars, onStarClick }) => {
    return (
        <div className={estilos.stars}>
            {[...Array(5)].map((_, i) => (
                <span
                    key={i}
                    className={`fa fa-star ${i < stars ? estilos.checked : estilos.unchecked}`}
                    onClick={() => onStarClick(i + 1)}
                ></span>
            ))}
        </div>
    );
};

export default StarRating;
