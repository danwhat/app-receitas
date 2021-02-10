const getFav = () => localStorage.getItem('favoriteRecipes');

const desFav = (data, setData, id) => {
  const newData = data.filter((e) => e.id !== id);
  setData(newData);
  localStorage.setItem('favoriteRecipes', JSON.stringify(newData));
};

const checkFav = (id) => {
  let arrayy = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (arrayy === null) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    arrayy = [];
  }
  if (!arrayy.some((r) => r.id === id)) return true;
  return false;
};

const inicializateInProgress = (type, id) => {
  const recipesInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const empity = 0;
  if (!recipesInProgress) {
    const blanckProgress = {
      cocktails: {},
      meals: {},
    };
    if (type === 'meals') blanckProgress.meals[id] = [];
    else blanckProgress.cocktails[id] = [];
    localStorage.setItem('inProgressRecipes', JSON.stringify(blanckProgress));
  } else {
    const { meals, cocktails } = recipesInProgress;
    const mealsLength = Object.keys((meals)).length;
    const cocktailsLength = Object.keys((cocktails)).length;
    if ((mealsLength === empity || meals[id] === undefined) && type === 'meals') {
      meals[id] = [];
      localStorage.setItem('inProgressRecipes', JSON.stringify(recipesInProgress));
    } else if ((cocktailsLength === empity
      || cocktails[id] === undefined) && type === 'cocktails') {
      cocktails[id] = [];
      localStorage.setItem('inProgressRecipes', JSON.stringify(recipesInProgress));
    }
  }
};

const insertOrRemoveIngredient = (type, id, ingredient) => {
  const recipesInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const recipeArray = recipesInProgress[type][id];
  if (recipeArray.includes(ingredient)) {
    // remove ingredient
    recipeArray.splice(recipeArray.indexOf(ingredient), 1);
    localStorage.setItem('inProgressRecipes', JSON.stringify(recipesInProgress));
  } else {
    // insert ingredient
    recipesInProgress[type][id] = [...recipeArray, ingredient];
    localStorage.setItem('inProgressRecipes', JSON.stringify(recipesInProgress));
  }
};

const ingredientList = (type, id) => {
  const recipesInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  return recipesInProgress[type][id];
};

const toggleFav = (recipe) => {
  let array = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (array === null) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    array = [];
  }
  if (!array.some((r) => r.id === recipe.id)) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([...array, recipe]));
  } else {
    const newArray = array.filter((e) => e.id !== recipe.id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newArray));
  }
};

export {
  toggleFav,
  getFav,
  desFav,
  checkFav,
  inicializateInProgress,
  insertOrRemoveIngredient,
  ingredientList,
};
