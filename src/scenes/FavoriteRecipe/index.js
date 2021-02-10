import React, { useState, useEffect } from 'react';
import copy from 'clipboard-copy';
import { getFav, desFav } from '../../services/saveLocal';
import shareImg from '../../images/shareIcon.svg';
import './style.css';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import Header from '../../common/Header';

const FavoriteRecipe = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('all');
  useEffect(() => {
    setData(JSON.parse(getFav()));
  }, []);

  const [copyOK, setCopyOK] = useState(false);
  const zero = 0;

  if (data && data.length !== zero) {
    return (
      <div>
        <Header />
        <button
          type="button"
          onClick={ () => setFilter('comida') }
          data-testid="filter-by-food-btn"
        >
          Food
        </button>
        <button
          type="button"
          onClick={ () => setFilter('bebida') }
          data-testid="filter-by-drink-btn"
        >
          Drink
        </button>
        <button
          type="button"
          onClick={ () => setFilter('all') }
          data-testid="filter-by-all-btn"
        >
          All
        </button>
        {data.filter((e) => {
          if (filter === 'bebida') return e.type === 'bebida';
          if (filter === 'comida') return e.type !== 'bebida';
          return e;
        }).map((e, i) => {
          const type = e.category === 'bebida' ? 'bebidas' : 'comidas';
          return (
            <div key={ i }>
              <a href={ `http://${window.location.host}/${e.type}s/${e.id}` }>
                <h1 data-testid={ `${i}-horizontal-name` }>{ e.name }</h1>
              </a>
              <h1 data-testid={ `${i}-horizontal-top-text` }>
                { `${e.area}${e.alcoholicOrNot} - ${e.category}` }
              </h1>
              <h1>{ e.area }</h1>
              <a href={ `http://${window.location.host}/${e.type}s/${e.id}` }>
                <img
                  className="recipeImage"
                  data-testid={ `${i}-horizontal-image` }
                  src={ e.image }
                  alt="favImg"
                />
              </a>
              <button
                type="button"
                onClick={ () => desFav(data, setData, e.id) }
                data-testid={ `${i}-horizontal-favorite-btn` }
                src={ blackHeartIcon }
              >
                <img src={ blackHeartIcon } alt="blackHeartIcon" />
              </button>
              <button
                type="button"
                data-testid={ `${i}-horizontal-share-btn` }
                src={ shareImg }
                onClick={ () => {
                  copy(`http://${window.location.host}/${type}/${e.id}`)
                    .then(() => {
                      setCopyOK(true);
                      const twosec = 2000;
                      setTimeout(() => setCopyOK(false), twosec);
                    });
                } }
              >
                <img data-testid="share-btn" src={ shareImg } alt="compartilhar" />
              </button>
              <h1>{copyOK && 'Link copiado!'}</h1>

            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <Header />
      <h1>Nenhuma receita encontrada.</h1>
    </div>
  );
};

export default FavoriteRecipe;
