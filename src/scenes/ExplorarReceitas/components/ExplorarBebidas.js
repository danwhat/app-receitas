import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { fetchDrink } from '../../../services/API';

export default function ExplorarBebidas() {
  const [randomId, setRandomId] = useState();

  const fetchRandom = async () => {
    const randomRecipe = await fetchDrink('');
    setRandomId(randomRecipe.drinks[0].idDrink);
  };

  useEffect(() => {
    fetchRandom();
  }, []);

  return (
    <div>
      <Link to="/explorar/bebidas/ingredientes">
        <button
          className="buttonBig"
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>
      <Link to={ `/bebidas/${randomId}` }>
        <button
          className="buttonBig"
          type="button"
          data-testid="explore-surprise"
        >
          Me Surpreenda!
        </button>
      </Link>
    </div>
  );
}
