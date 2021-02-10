import React from 'react';
import { Link } from 'react-router-dom';
import DrinkIcon from '../../images/drinkIcon.svg';
import ExploreIcon from '../../images/exploreIcon.svg';
import MealIcon from '../../images/mealIcon.svg';
import './styles.css';

function BottomBar() {
  return (
    <footer data-testid="footer" className="bottom-bar">
      <nav className="nav">
        <Link to="/bebidas" className="icon-link">
          <img
            src={ DrinkIcon }
            alt="page of drinks"
            data-testid="drinks-bottom-btn"
          />
        </Link>
        <Link to="/explorar" className="icon-link">
          <img
            src={ ExploreIcon }
            alt="page of explorer"
            data-testid="explore-bottom-btn"
          />
        </Link>
        <Link to="/comidas" className="icon-link">
          <img
            src={ MealIcon }
            alt="page of food"
            data-testid="food-bottom-btn"
          />
        </Link>
      </nav>
    </footer>
  );
}

export default BottomBar;
