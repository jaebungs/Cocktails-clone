import React from 'react';
import Modal from 'react-modal';
import styled from './recipeCard.module.scss';

const RecipeItem = ({ recipe }) => {
  const [modalIsOpen, setModalIsOpen ] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  return (
    <div className={styled.recipeCard}>
      <h3>{recipe.name}</h3>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Instruction: {recipe.instruction}</p>
    </div>
  );
};

export default RecipeItem;
