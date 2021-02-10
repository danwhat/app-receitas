import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  function enableButton() {
    const regexForEmail = /\S+@\S+\.\S+/;
    const length = 6;
    const passwordIsValid = password.length >= length;
    const emailIsValid = regexForEmail.test(email);
    if (passwordIsValid && emailIsValid === true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  function handleChangeEmail({ target }) {
    const { value } = target;
    setEmail(value);
    enableButton();
  }

  function handleChangePassword({ target }) {
    const { value } = target;
    setPassword(value);
    enableButton();
  }

  function handleSubmit() {
    const userEmail = { email };
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
    localStorage.setItem('user', JSON.stringify(userEmail));
    history.push('/comidas');
  }
  const context = {
    email,
    password,
    disabled,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
  };

  return (
    <LoginContext.Provider value={ context }>
      {children}
    </LoginContext.Provider>
  );
};

LoginProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export { LoginContext, LoginProvider };
