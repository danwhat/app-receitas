import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import BottonBar from '../../common/BottomBar';
import Header from '../../common/Header';

const Perfil = () => {
  const history = useHistory();
  const [data, setData] = useState();

  useEffect(() => {
    const newData = JSON.parse(localStorage.getItem('user'));
    setData(newData);
  }, []);

  return (
    <div>
      <Header />
      <h1 data-testid="profile-email">{ data ? data.email : 'vazio' }</h1>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => history.push('/receitas-feitas') }
      >
        Receitas Feitas
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => history.push('/receitas-favoritas') }
      >
        Receitas Favoritas
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ () => {
          history.push('/');
          localStorage.clear();
        } }
      >
        Sair
      </button>
      <BottonBar />
    </div>
  );
};

export default Perfil;
