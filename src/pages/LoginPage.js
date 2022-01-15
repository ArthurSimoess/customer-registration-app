/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoginValue } from '../redux/action/index';
import { setLoginStorage } from '../services/localstorage';
import blackData from '../images/blackData.svg';
import Footer from '../components/Footer';

function LoginPage() {
  const [loginInfos, setLoginInfos] = useState({
    email: '',
    name: '',
  });
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();

  function checkInputs() {
    const { email, name } = loginInfos;
    const regex = /\S+@\S+\.\S+/;
    const check = regex.test(email);
    if (check && name.length >= 4) {
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
    setLoginStorage(loginInfos);
    dispatch(setLoginValue(loginInfos));
    // O dispatch vai disparar uma action que vai salvar as informações do loginInfos no meu reducer
  }

  return (
    <div className="bg-gray-200 h-screen flex flex-col items-center justify-center">
      <header className="fixed top-0 bg-black text-white p-4 w-full text-center">
        <p>Cadastro de clientes</p>
      </header>
      <img src={blackData} alt="searchInformation" className="w-64" />
      <div className="bg-white rounded-lg py-16 px-5">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-8 backdrop-blur-sm"
        >
          <label htmlFor="email" className="flex flex-col gap-2">
            <span>Email:</span>
            <input
              type="email"
              name="email"
              value={loginInfos.email}
              onChange={handleChangeInputs}
              placeholder="Digite seu email"
              className="p-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-gray-100 rounded-sm"
              autoComplete="off"
            />
          </label>
          <label htmlFor="password" className="flex flex-col gap-2">
            <span>Nome:</span>
            <input
              type="text"
              name="name"
              value={loginInfos.name}
              onChange={handleChangeInputs}
              placeholder="Digite seu nome"
              className="p-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-gray-100 rounded-sm"
              autoComplete="off"
            />
          </label>
          <button
            type="submit"
            disabled={disabled}
            className="bg-black p-2 text-white rounded-lg"
          >
            Entrar
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
