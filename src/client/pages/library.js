import React from 'react';
import { server } from '../configs/index';
import RecipeLists from '../components/RecipeLists';

const library = ({ recipes }) => {
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
