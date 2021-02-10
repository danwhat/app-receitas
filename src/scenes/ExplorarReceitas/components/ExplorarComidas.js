import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMeal } from '../../../services/API';

export default function ExplorarComidas() {
  const [randomId, setRandomId] = useState();

  const fetchRandom = async () => {
    const randomRecipe = await fetchMeal('');
    setRandomId(randomRecipe.meals[0].idMeal);
  };

  useEffect(() => {
    fetchRandom();
  }, []);

  return (
    <div>
      <Link to="/explorar/comidas/ingredientes">
        <button
          className="buttonBig"
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>
      <Link to="/explorar/comidas/area">
        <button
          className="buttonBig"
          type="button"
          data-testid="explore-by-area"
        >
          Por Local de Origem
        </button>
      </Link>
      <Link to={ `/comidas/${randomId}` }>
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
