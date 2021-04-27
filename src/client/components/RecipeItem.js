import React from 'react';
import styled from '../styles/recipeCard.module.scss';

const RecipeItem = ({ recipe }) => {
  return (
    <div className={styled.recipeCard}>
      <h3>{recipe.name}</h3>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Instruction: {recipe.instruction}</p>
    </div>
  );
};

export default RecipeItem;
