import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../../context/AppContext';
import searchIcon from '../../../images/searchIcon.svg';
import '../style.css';

export default function SearchButton(props) {
  const { pathname } = props;
  const { inputStatus, setInputStatus } = useContext(AppContext);
  const { searchInput } = inputStatus;

  function hedleChange() {
    return setInputStatus({ searchInput: !searchInput });
  }
  console.log(pathname);
  if (pathname !== ('/explorar')
  && pathname !== ('/explorar/comidas')
  && pathname !== ('/explorar/bebidas')
  && pathname !== ('/explorar/comidas/ingredientes')
  && pathname !== ('/explorar/bebidas/ingredientes')
  && pathname !== ('/perfil')
  && pathname !== ('/receitas-feitas')
  && pathname !== ('/receitas-favoritas')) {
    return (
      <input
        src={ searchIcon }
        id="search-icon"
        type="image"
        alt="search-image"
        className="search-button"
        data-testid="search-top-btn"
        onClick={ () => hedleChange() }
      />
    );
  }
  return (
    <div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  );
}

SearchButton.propTypes = {
  pathname: PropTypes.string.isRequired,
};
