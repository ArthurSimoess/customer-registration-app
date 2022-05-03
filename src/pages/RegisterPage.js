/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Input from '../components/Input';
import { setRegisterClient } from '../redux/action';

function RegisterPage() {
  const [registerData, setRegisterData] = useState({
    nome: '',
    idade: 0,
    email: '',
    sexo: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();

  function handleChange({ target: { name, value } }) {
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  }

  function handleClick() {
    history.push('/clientesCadastrados');
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setRegisterClient(registerData));
    history.push('/clientesCadastrados');
  }

  return (
    <div className="flex flex-col h-screen overflow-auto justify-between">
      <header className="bg-black text-white p-4 w-full flex items-center justify-between">
        <p className="text-lg font-bold">Página de Registro</p>
        <button
          type="button"
          onClick={handleClick}
          className="bg-gray-200 w-16 text-black p-1 rounded"
        >
          voltar
        </button>
      </header>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center justify-center">
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
        <div className="flex gap-2">
          <Input
            name="sexo"
            type="radio"
            label="Feminino"
            placeholder="Digite sua idade"
            value="feminino"
            onChange={handleChange}
          />
          <Input
            name="sexo"
            type="radio"
            label="Masculino"
            placeholder="Digite sua idade"
            value="masculino"
            onChange={handleChange}
          />
        </div>
        <Input
          name="email"
          label="Email:"
          type="email"
          placeholder="Digite seu email"
          value={registerData.email}
          onChange={handleChange}
        />
        <button type="submit" className="bg-black p-2 text-white rounded-lg">
          Cadastrar
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default RegisterPage;
