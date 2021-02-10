import React, { useState, useEffect } from 'react';
import copy from 'clipboard-copy';
import { useParams, useHistory } from 'react-router-dom';
import shareImg from '../../images/shareIcon.svg';
import {
  inicializateInProgress,
  insertOrRemoveIngredient,
  ingredientList,
} from '../../services/saveLocal';
import FavBtn from '../../common/FavBtn';
import { mealById, drinkById } from '../../services/API';
import './style.css';

const ReceitaEmProgresso = () => {
  const history = useHistory();
  const [mainData, setMainData] = useState({});
  const [copyOK, setCopyOK] = useState(false);
  const [isloading, setIsLoading] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [listIngredient, setListIngredient] = useState([]);
  const { pathname } = history.location;
  const { id } = useParams();
  const mainFunction = pathname.includes('comida') ? mealById : drinkById;
  const type = mainFunction === mealById ? 'meals' : 'cocktails';

  const ingredients = Object.keys(mainData)
    .filter((e) => e.includes('strIngredient')
    && mainData[e] !== null && mainData[e] !== '');
  const veryDisabled = () => {
    const qtdIngredients = ingredients.length;
    const alreadyUsed = listIngredient.length;
    return alreadyUsed + 1 !== qtdIngredients;
  };

  const mapOl = (e, i) => (
    <li key={ i } data-testid={ `${i}-ingredient-step` }>
      <label
        htmlFor={ mainData[e] }
      >
        <input
          type="checkbox"
          id={ mainData[e] }
          defaultChecked={ listIngredient.includes(mainData[e]) }
          onChange={ () => {
            insertOrRemoveIngredient(type, id, mainData[e]);
            setListIngredient(ingredientList(type, id));
            setDisabled(veryDisabled());
          } }
        />
        { mainData[e] }
      </label>
    </li>);
  useEffect(() => {
    const getData = async () => {
      const data = await mainFunction(id);
      setMainData(data);
      setIsLoading(false);
      inicializateInProgress(type, id);
      setListIngredient(ingredientList(type, id));
    };
    getData();
  }, [id, mainFunction, type]);

  if (!isloading) {
    return (
      <div>
        <img
          data-testid="recipe-photo"
          src={
            mainFunction === mealById ? mainData.strMealThumb : mainData.strDrinkThumb
          }
          alt="food or drink"
        />
        <h1 data-testid="recipe-title">
          {
            mainFunction === mealById ? mainData.strMeal : mainData.strDrink
          }
        </h1>
        <button
          type="button"
          onClick={ () => {
            const url = window.location.href.replace('/in-progress', '');
            copy(url)
              .then(() => setCopyOK(true));
          } }
        >
          <img data-testid="share-btn" src={ shareImg } alt="compartilhar" />
        </button>
        <h5>{copyOK && 'Link copiado!'}</h5>
        <FavBtn
          mainData={ mainData }
          type={ mainFunction === mealById ? 'comida' : 'bebida' }
        />
        <p data-testid="recipe-category">{mainData.strCategory}</p>
        <h2>Ingredientes:</h2>
        <ul>
          {ingredients.map((e, i) => mapOl(e, i))}
        </ul>
        <h2>Instruções:</h2>
        <p data-testid="instructions">{mainData.strInstructions}</p>
        <button
          type="button"
          data-testid="finish-recipe-btn"
          disabled={ disabled }
          onClick={ () => {
            history.push('/receitas-feitas');
          } }
        >
          Finalizar
        </button>
      </div>
    );
  }
  return <h1>carregando...</h1>;
};

export default ReceitaEmProgresso;
