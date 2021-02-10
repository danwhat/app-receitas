import React from 'react';
import PropTypes from 'prop-types';
import CategoryButton from '../CategoryButton';

function CategoryPanel({ categoryType, categoryList }) {
  return (
    <div>
      {categoryList.map((item, index) => (
        <CategoryButton
          key={ index }
          categoryName={ item }
          categoryType={ categoryType }
        />))}
    </div>
  );
}

CategoryPanel.propTypes = {
  categoryType: PropTypes.string.isRequired,
  categoryList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryPanel;
