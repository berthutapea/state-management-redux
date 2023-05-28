import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [id, onIdChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="login-input">
      <input type="text" value={id} onChange={onIdChange} placeholder="Username" />
      <input type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
      <button type="button" onClick={() => login({ id, password })}>Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
