import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CardClients from '../components/CardClients';
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

  function handleFinish() {
    localStorage.removeItem('userData');
    history.push('/');
  }

  if (!user.email && !user.name) return (<h1>Faça o login antes de continuar</h1>);
  return (
    <div>
      { clients.length === 0 ? (
        <>
          <h2>Não há clientes registrados</h2>
          <button type="button" onClick={handleClickBtn}>
            Registrar um cliente
          </button>
          <button type="button" onClick={handleFinish}>
            Encerrar sessão
          </button>
        </>
      ) : (
        <>
          <CardClients />
          <button type="button" onClick={handleClickBtn}>
            Registrar um ciente
          </button>
          <button type="button" onClick={handleFinish}>
            Encerrar sessão
          </button>
        </>
      )}
    </div>
  );
}

export default RegisterClients;
