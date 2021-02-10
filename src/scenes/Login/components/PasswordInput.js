import React, { useContext } from 'react';
import { LoginContext } from '../../../context/LoginContext';

function PasswordInput() {
  const { password, handleChangePassword } = useContext(LoginContext);
  return (
    <div className="form-group">
      <input
        id="password"
        data-testid="password-input"
        type="password"
        className="form-control"
        placeholder="Digite sua Senha"
        value={ password }
        onChange={ handleChangePassword }
      />
    </div>

  );
}

export default PasswordInput;
