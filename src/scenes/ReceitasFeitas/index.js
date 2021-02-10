import React from 'react';
import Header from '../../common/Header';
import CategoryPanel from './components/CategoryPanel';
import DoneRecipesCard from './components/DoneRecipesCard';

function ReceitasFeitas() {
  const buttons = ['all', 'food', 'drink'];
  return (
    <div>
      <Header />
      <CategoryPanel categoryType="done-recipes" categoryList={ buttons } />
      <DoneRecipesCard />
    </div>
  );
}

export default ReceitasFeitas;
