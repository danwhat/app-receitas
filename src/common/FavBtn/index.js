import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import favImgON from '../../images/whiteHeartIcon.svg';
import favImgOFF from '../../images/blackHeartIcon.svg';
import { toggleFav, checkFav } from '../../services/saveLocal';

export default function FavBtn({ mainData, type }) {
  const [favRecipe, setFavRecipe] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setFavRecipe(checkFav(id));
  }, [id]);

  let recipe = {};

  switch (type) {
  case 'bebida':
    recipe = {
      id: mainData.idDrink,
      type: 'bebida',
      area: '',
      category: mainData.strCategory,
      alcoholicOrNot: mainData.strAlcoholic,
      name: mainData.strDrink,
      image: mainData.strDrinkThumb,
    };
    break;
  case 'comida':
    recipe = {
      id: mainData.idMeal,
      type: mainData.type ? mainData.type : 'comida',
      area: mainData.strArea,
      category: mainData.strCategory,
      alcoholicOrNot: mainData.alcoholicOrNot ? mainData.alcoholicOrNot : '',
      name: mainData.strMeal,
      image: mainData.strMealThumb,
    };
    break;
  default: return null;
  }
  return (
    <button
      type="button"
      onClick={ () => {
        toggleFav(recipe);
        if (favRecipe) {
          setFavRecipe(false);
        } else setFavRecipe(true);
      } }
    >
      <img
        data-testid="favorite-btn"
        src={ favRecipe ? favImgON : favImgOFF }
        alt="compartilhar"
      />
    </button>
  );
}

FavBtn.propTypes = {
  type: PropTypes.string.isRequired,
  mainData: PropTypes.shape({
    idDrink: PropTypes.string,
    strCategory: PropTypes.string,
    strAlcoholic: PropTypes.string,
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    idMeal: PropTypes.string,
    type: PropTypes.string,
    strArea: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    alcoholicOrNot: PropTypes.string,
  }).isRequired,
};
