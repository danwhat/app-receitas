import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../../context/AppContext';

function CategoryButton({ categoryName, categoryType }) {
  const { filterByCategory } = useContext(AppContext);
  return (
    <button
      className="buttonPattern"
      data-testid={ `${categoryName}-category-filter` }
      name={ categoryName }
      onClick={ (e) => filterByCategory(e, categoryType) }
      categorytype={ categoryType }
      type="button"
    >
      {categoryName}
    </button>
  );
}

CategoryButton.propTypes = {
  categoryName: PropTypes.string.isRequired,
  categoryType: PropTypes.string.isRequired,
};
export default CategoryButton;
