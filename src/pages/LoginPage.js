/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoginValue } from '../redux/action/index';

function LoginPage() {
  const [loginInfos, setLoginInfos] = useState({
    email: '',
    password: '',
  });
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();

  function checkInputs() {
    const { email, password } = loginInfos;
    const regex = /\S+@\S+\.\S+/;
    const check = regex.test(email);
    if (check && password.length >= 4) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  function handleChangeInputs({ target: { name, value } }) {
    setLoginInfos({
      ...loginInfos,
      [name]: value,
    });
    checkInputs();
  }

  function handleSubmit(e) {
    e.preventDefault();
    history.push('/clientesCadastrados');
    dispatch(setLoginValue(loginInfos));
    // O dispatch vai disparar uma action que vai salvar as informações do loginInfos no meu reducer
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <span>Email:</span>
          <input
            type="email"
            name="email"
            value={loginInfos.email}
            onChange={handleChangeInputs}
            placeholder="Digite seu email"
          />
        </label>
        <label htmlFor="password">
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            value={loginInfos.password}
            onChange={handleChangeInputs}
            placeholder="Digite sua senha"
          />
        </label>
        <button type="submit" disabled={disabled}>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
