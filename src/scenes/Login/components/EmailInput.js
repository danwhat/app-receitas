import React, { useContext } from 'react';
import { LoginContext } from '../../../context/LoginContext';

function EmailInput() {
  const { email, handleChangeEmail } = useContext(LoginContext);
  return (
    <div className="form-group">
      <input
        id="email"
        data-testid="email-input"
        type="email"
        className="form-control"
        value={ email }
        placeholder="Digite o seu e-mail"
        onChange={ handleChangeEmail }
      />
    </div>

  );
}

export default EmailInput;
