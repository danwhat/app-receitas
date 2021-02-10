import React, { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import './style.css';
import EmailInput from './components/EmailInput';
import PasswordInput from './components/PasswordInput';

export default function Login() {
  const {
    disabled,
    handleSubmit,
  } = useContext(LoginContext);
  return (
    <>
      <div className="modal-content">
        <h1 className="welcome">Bem-Vindo</h1>
        <EmailInput />
        <PasswordInput />
        <button
          data-testid="login-submit-btn"
          type="button"
          className="btn"
          disabled={ disabled }
          onClick={ () => handleSubmit() }
        >
          Entrar
        </button>
        <a href="/" onClick={ () => alert('A senha é XABLAU!') }>Esqueceu a senha?</a>
      </div>
      <div className="logo-login">
      </div>
    </>
  );
}
