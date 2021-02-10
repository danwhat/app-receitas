import React, { useState, useContext, useEffect } from 'react';
import copy from 'clipboard-copy';

import { useHistory, Link } from 'react-router-dom';
import { AppContext } from '../../../../context/AppContext';

import shareIcon from '../../../../images/shareIcon.svg';
import './styles.css';

function DoneRecipesCard() {
  const history = useHistory();
  const [copyLink, setCopyLink] = useState(false);
  const { saveDoneRecipes, filteredDoneRecipes } = useContext(AppContext);

  const copiedLink = (type, id) => {
    copy(`http://localhost:3000/${type}s/${id}`)
      .then(() => setCopyLink(true));
  };

  const goToDetails = (type, id) => {
    history.push(`/${type}s/${id}`);
  };

  useEffect(() => {
    const putSaveDoneRecipes = async () => {
      const getStore = await localStorage.getItem('doneRecipes');
      const doneRecipes = await JSON.parse(getStore);
      saveDoneRecipes(doneRecipes);
    };
    putSaveDoneRecipes();
  }, []);

  return (
    <div>
      <div>
        {copyLink
        && <h1>Link copiado!</h1>}
      </div>

      {filteredDoneRecipes && filteredDoneRecipes.map((item, index) => (
        <div key={ index } className="card">
          <Link to={ `/${item.type}s/${item.id}` }>
            <img
              disabled={ false }
              src={ item.image }
              data-testid={ `${index}-horizontal-image` }
              alt="card"
              className="recipeImage"
            />
          </Link>
          <div>
            <h1
              data-testid={ `${index}-horizontal-top-text` }
            >
              {item.type === 'comida'
                ? `${item.area} - ${item.category}`
                : item.alcoholicOrNot}
            </h1>
            <button onClick={ () => goToDetails(item.type, item.id) } type="button">
              <h1
                data-testid={ `${index}-horizontal-name` }
              >
                {item.name}
              </h1>
            </button>
            <h2 data-testid={ `${index}-horizontal-done-date` }>{item.doneDate}</h2>
            <button
              onClick={ () => copiedLink(item.type, item.id) }
              key={ index }
              type="button"
            >
              <img
                src={ shareIcon }
                data-testid={ `${index}-horizontal-share-btn` }
                alt="share"
              />
            </button>
            {item.tags.map((tag) => (
              <h3
                key={ index }
                data-testid={ `${index}-${tag}-horizontal-tag` }
              >
                {tag}
              </h3>
            ))}

          </div>
        </div>

      ))}

    </div>
  );
}

export default DoneRecipesCard;
