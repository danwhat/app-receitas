import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import copy from 'clipboard-copy';
import { mealById, mealRecomendations } from '../../services/API';
import './style.css';
import shareImg from '../../images/shareIcon.svg';
import FavBtn from '../../common/FavBtn';

const ComidaDetails = () => {
  const history = useHistory();
  const [mainData, setMainDate] = useState({});
  const [recomen, setRecomen] = useState([]);
  const [copyOK, setCopyOK] = useState(false);
  const [isInProgress, setIsInProgress] = useState(true);
  const [isDone, setIsDone] = useState(false);
  const { id } = useParams();
  const seis = 6;
  const zero = 0;

  const checkInProgress = (idCheck) => {
    const data = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (data) {
      const cocktailsKeys = Object.keys(data.cocktails);
      const mealsKeys = Object.keys(data.meals);
      const array = [...cocktailsKeys, ...mealsKeys];
      return array.includes(idCheck);
    }
  };

  const checkIsDone = (idCheck) => {
    const data = JSON.parse(localStorage.getItem('doneRecipes'));
    if (data) {
      const array = data.map((e) => e.id);
      return array.includes(idCheck);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const data = await mealById(id);
      setMainDate(data);

      const recomendations = await mealRecomendations();
      setRecomen(recomendations.drinks);
      setIsInProgress(checkInProgress(id));
      setIsDone(checkIsDone(id));
    };
    getData();
  }, [id]);

  if (mainData) {
    const { strMealThumb, strMeal, strCategory, strInstructions } = mainData;
    const ingredients = Object.keys(mainData).filter((e) => e.includes('strIngredient'));
    const measures = Object.keys(mainData).filter((e) => e.includes('strMeasure'));
    const recomendations = recomen.map((e) => e.strDrink).slice(zero, seis);

    return (
      <div className="containerFull">
        <img
          src={ strMealThumb }
          alt="meal"
          data-testid="recipe-photo"
          className="fullImg"
        />
        <div className="containerMargin">
          <h1 data-testid="recipe-title">{strMeal}</h1>
          <h2 data-testid="recipe-category">{strCategory}</h2>
          <p data-testid="instructions">{strInstructions}</p>
          <h2>Ingredientes:</h2>
          <ul>
            {ingredients.map((e, i) => {
              if (mainData[ingredients[i]] !== '') {
                return (
                  <li
                    key={ i }
                    data-testid={ `${i}-ingredient-name-and-measure` }
                  >
                    ✔️&nbsp;
                    {mainData[ingredients[i]]}
                    &nbsp;
                    {mainData[measures[i]]}
                  </li>
                );
              }
              return null;
            })}
          </ul>
          <iframe
            title="video"
            data-testid="video"
            width="280"
            height="180"
            src="https://www.youtube.com/embed/vaZb1MnFBgA"
            frameBorder="0"
            allow="accelerometer;
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          {!isDone && (
            <button
              onClick={ () => history.push(`/comidas/${id}/in-progress`) }
              className="startRecipe"
              type="button"
              data-testid="start-recipe-btn"
            >
              {isInProgress ? 'Continuar Receita' : 'Iniciar Receita'}
            </button>)}
          <ol className="recomendations">
            {recomendations.map((e, i) => (
              <li data-testid={ `${i}-recomendation-card` } key={ i }>
                <p data-testid={ `${i}-recomendation-title` }>{e}</p>
              </li>))}
          </ol>
          <div className="shareBox">
            <button
              type="button"
              onClick={ () => {
                copy(window.location.href)
                  .then(() => setCopyOK(true));
              } }
            >
              <img data-testid="share-btn" src={ shareImg } alt="compartilhar" />
            </button>
            <h1>{copyOK && 'Link copiado!'}</h1>
            <FavBtn mainData={ mainData } type="comida" />
          </div>
        </div>
      </div>
    );
  }
  return <h1>carregando...</h1>;
};

export default ComidaDetails;
