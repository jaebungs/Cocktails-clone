import React from 'react';
import RecipeItem from './RecipeItem';
import styeld from './recipeLayout.module.scss';

const RecipeLists = ({ recipes }) => {
  return (
    <div className={styeld.recipeContainer}>
      {recipes.map(recipe => {
        return <RecipeItem key={recipe._id} recipe={recipe} />;
      })}
    </div>
  );
};

export default RecipeLists;
