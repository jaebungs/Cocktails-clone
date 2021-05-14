import React from 'react';
import styled from './recipeModal.module.scss';

const RecipesModal = ({ recipe, closeModal }) => {
  return (
    <div className={styled.modalContainer}>
      <h2>{recipe.name}</h2>
      <h3>{recipe.garnish}</h3>
      <p>Modal testing</p>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default RecipesModal;
