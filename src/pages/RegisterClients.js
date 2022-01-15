import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CardClients from '../components/CardClients';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getLoginStorage } from '../services/localstorage';

function RegisterClients() {
  const [user, setUser] = useState({});
  const registerClients = useSelector((state) => state.registerReducer);
  const { clients } = registerClients;
  const history = useHistory();

  function checkUserData() {
    if (getLoginStorage('userData') !== null && !user.email) {
      setUser(getLoginStorage('userData'));
    }
  }

  useEffect(() => {
    checkUserData();
  }, []);

  function handleClickBtn() {
    history.push('/cadastro');
  }

  if (!user.email && !user.name) return (<h1>Faça o login antes de continuar</h1>);
  return (
    <div className="bg-gray-100 sm:h-screen">
      <Header
        text="Clientes Cadastrados"
        name={user.name}
        email={user.email}
      />
      { clients.length === 0 ? (
        <div className="bg-slate-300 h-2/6 w-10/12 mx-auto flex flex-col items-center justify-center gap-10 mt-36 p-6">
          <h2>Não há clientes registrados</h2>
          <button
            type="button"
            onClick={handleClickBtn}
            className="p-2 bg-black text-white rounded"
          >
            Registrar um cliente
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-10 mb-10">
          <button
            type="button"
            onClick={handleClickBtn}
            className="p-2 bg-black text-white rounded mb-6"
          >
            Registrar um ciente
          </button>
          <CardClients />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default RegisterClients;
