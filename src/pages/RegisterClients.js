import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CardClients from '../components/CardClients';

function RegisterClients() {
  const login = useSelector((state) => state.loginReducer.loginInfos);
  const { email, password } = login;
  const registerClients = useSelector((state) => state.registerReducer);
  const { clients } = registerClients;
  const history = useHistory();
  function handleClickBtn() {
    history.push('/cadastro');
  }

  if (!email && !password) return (<h1>Faça o login antes de continuar</h1>);

  return (
    <div>
      {
        clients.length === 0 ? (
          <>
            <h2>Não há clientes registrados</h2>
            <button type="button" onClick={handleClickBtn}>
              Registrar um cliente
            </button>
          </>
        ) : (
          <>
            <CardClients />
            <button type="button" onClick={handleClickBtn}>
              Registrar um ciente
            </button>

          </>
        )
      }
    </div>
  );
}

export default RegisterClients;
