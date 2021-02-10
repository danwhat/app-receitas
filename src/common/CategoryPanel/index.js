import React from 'react';
import PropTypes from 'prop-types';
import CategoryButton from './components/CategoryButton';

function CategoryPanel({ categoryType, categoryList }) {
  return (
    <div className="containerSize">
      <CategoryButton
        categoryName="All"
        categoryType={ `all-${categoryType}` }
      />
      {categoryList.map((item, index) => (
        <CategoryButton
          key={ index }
          categoryName={ item.strCategory }
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
