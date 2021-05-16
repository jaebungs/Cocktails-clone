import React, { useState } from 'react';
import Modal from 'react-modal';
import RecipesModal from './RecipesModal/RecipesModal';
import styled from './recipeCard.module.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#__next');

const RecipeItem = ({ recipe }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styled.recipeCard}>
      <div onClick={toggleModal}>
        <h3>{recipe.name}</h3>
        <p>Ingredients: {recipe.ingredients}</p>
        <p>Instruction: {recipe.instruction}</p>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={recipe.name + ' recipe modal'}
      >
        <RecipesModal recipe={recipe} closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default RecipeItem;
