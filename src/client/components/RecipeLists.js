import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeLists = ({ recipes }) => {
  return (
    <div>
      {recipes.map(recipe => {
        return <RecipeItem key={recipe._id} recipe={recipe} />;
      })}
    </div>
  );
};

export default RecipeLists;
