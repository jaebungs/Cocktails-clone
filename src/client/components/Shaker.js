import React, { useState } from 'react';
import CocktailSVG from '../svg/cocktailsvg.js';
import CouldNotFoundSVG from '../svg/cocktailnotfoundsvg.js';
import styled from '../styles/shaker.module.scss';

const Shaker = () => {
  const [isNotfound, setIsNotFound] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const handleClickSearch = () => {
    setIsNotFound(true);
  };

  const handleChangeInput = e => {
    setSearchInput(e.target.value);
  };

  return (
    <div className={styled.cockailSVGContainer}>
      {!isNotfound ? (
        <CocktailSVG className={styled.cocktailSVG} />
      ) : (
        <CouldNotFoundSVG className={styled.cocktailSVG} />
      )}
      <div className={styled.searchContainer}>
        <h2 className={styled.h2}>The Cocktail Shaker</h2>
        <h3 className={styled.h3}>You give us an ingredient, we give you a recipe for cocktail</h3>
        <input
          className={styled.searchInput}
          onChange={handleChangeInput}
          placeholder="Put one liquor type here."
        />
        <button className={styled.searchBtn} onClick={handleClickSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Shaker;
