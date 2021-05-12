import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { server } from '../configs/index';
import { getCocktails } from '../redux/actions/cocktailAction';
import RecipeLists from '../components/Recipes/RecipeLists';

const library = ({ recipes }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCocktails());
  }, []);
  console.log(recipes);
  return (
    <div>
      <h2>Library Page</h2>
      <RecipeLists recipes={recipes} />
    </div>
  );
};

export default library;

export const getStaticProps = async () => {
  const res = await fetch(`${server}/cocktails`);
  const recipes = await res.json();

  return {
    props: { recipes },
  };
};
