import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import BottomBar from '../../common/BottomBar';
import { AppContext } from '../../context/AppContext';

import CategoryPanel from '../../common/CategoryPanel';
import NavigationButton from '../../common/NavigationButton';

import Header from '../../common/Header';
import './style.css';

const Bebidas = () => {
  const history = useHistory();
  const { drinksCategories, filteredDrinks, isUsingSearchBar } = useContext(AppContext);
  const goToDetails = (idMeal) => {
    history.push(`/bebidas/${idMeal}`);
  };

  if (filteredDrinks.drinks) {
    const zero = 0;
    const doze = 12;
    if (filteredDrinks.drinks.length === 1 && isUsingSearchBar) {
      history.push(
        `/bebidas/${filteredDrinks.drinks[0].idDrink}`,
      );
    }
    return (
      <div>
        <Header />
        <CategoryPanel categoryType="drinks" categoryList={ drinksCategories } />
        <div className="containerSize">
          {filteredDrinks.drinks.slice(zero, doze).map((e, i) => (
            <div className="recipeBox" key={ e.idMeal }>
              <div
                className="drinkContainer"
                key={ e.idDrink }
                data-testid={ `${i}-card-name` }
              >
                <img
                  data-testid={ `${i}-card-img` }
                  src={ e.strDrinkThumb }
                  alt="drink"
                />
                <h1>
                  <NavigationButton
                    testId={ `${i}-recipe-card` }
                    goToDetails={ goToDetails }
                    itemName={ e.strDrink }
                    idMeal={ e.idDrink }
                  />
                </h1>
              </div>
            </div>))}
        </div>
        <BottomBar />
      </div>
    );
  }

  return <h1>Loading...</h1>;
};

export default Bebidas;
