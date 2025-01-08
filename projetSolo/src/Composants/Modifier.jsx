import React from 'react';
import Formulaire from './Formulaire';

const Modifier = ({ titre }) => {

  const handleClick = () => {
    console.log('Titre du film:', titre);
  }
  return (
    <button onClick={handleClick}>Modifier</button>
  );
};

export default Modifier;
