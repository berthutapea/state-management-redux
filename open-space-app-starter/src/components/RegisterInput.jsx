import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [id, onIdChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="register-input">
      <input type="text" value={name} onChange={onNameChange} placeholder="Name" />
      <input type="text" value={id} onChange={onIdChange} placeholder="Username" />
      <input type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
      <button type="button" onClick={() => register({ name, id, password })}>Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
