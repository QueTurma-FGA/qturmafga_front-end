import React from 'react';
import estilos from './StarRating.module.css';

const StarRating = ({ stars, onStarClick }) => {
  const fullStars = Math.floor(stars);
  const hasHalfStar = stars - fullStars >= 0.5;

  return (
    <div className={estilos.stars}>
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return (
            <span
              key={i}
              className={`fa fa-star ${estilos.checked}`}
              onClick={() => onStarClick && onStarClick(i + 1)}
            ></span>
          );
        } else if (i === fullStars && hasHalfStar) {
          return (
            <span
              key={i}
              className={`fa fa-star-half-alt ${estilos.checked}`}
              onClick={() => onStarClick && onStarClick(i + 1)}
            ></span>
          );
        } else {
          return (
            <span
              key={i}
              className={`fa fa-star ${estilos.unchecked}`}
              onClick={() => onStarClick && onStarClick(i + 1)}
            ></span>
          );
        }
      })}
    </div>
  );
};

export default StarRating;
