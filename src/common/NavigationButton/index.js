import React from 'react';
import PropTypes from 'prop-types';

function NavigationButton({ itemName, goToDetails, idMeal, testId }) {
  return (
    <button
      onClick={ () => goToDetails(idMeal) }
      data-testid={ testId }
      type="button"
    >
      {itemName}
    </button>
  );
}

NavigationButton.propTypes = {
  itemName: PropTypes.string.isRequired,
  goToDetails: PropTypes.func.isRequired,
  idMeal: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};

export default NavigationButton;
