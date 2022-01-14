/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Input from '../components/Input';
import { setRegisterClient } from '../redux/action';

function RegisterPage() {
  const [registerData, setRegisterData] = useState({
    nome: '',
    idade: 0,
    email: '',
    tel: 0,
    cep: 0,
  });
  const dispatch = useDispatch();
  const history = useHistory();

  function handleChange({ target: { name, value } }) {
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setRegisterClient(registerData));
  }

  return (
    <div>
      <h1>Página de registro</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="nome"
          type="text"
          label="Nome:"
          placeholder="Digite seu nome"
          value={registerData.nome}
          onChange={handleChange}
        />
        <Input
          name="idade"
          type="number"
          label="Idade:"
          placeholder="Digite sua idade"
          value={registerData.idade}
          onChange={handleChange}
        />
        <Input
          name="email"
          label="Email:"
          type="email"
          placeholder="Digite seu email"
          value={registerData.email}
          onChange={handleChange}
        />
        <Input
          name="tel"
          label="Telefone:"
          type="number"
          placeholder="Digite um número de contato"
          value={registerData.tel}
          onChange={handleChange}
        />
        <Input
          name="cep"
          label="CEP:"
          type="number"
          placeholder="Digite seu cep"
          value={registerData.cep}
          onChange={handleChange}
        />
        <button type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
