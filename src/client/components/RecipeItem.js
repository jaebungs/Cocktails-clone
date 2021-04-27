import React from 'react';

const RecipeItem = ({ recipe }) => {
  return (
    <div>
      <h3>{recipe.name}</h3>
      <p>{recipe.ingredients}</p>
      <p>{recipe.instruction}</p>
    </div>
  );
};

export default RecipeItem;
