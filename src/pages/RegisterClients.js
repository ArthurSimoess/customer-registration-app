import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function RegisterClients() {
  const login = useSelector((state) => state.loginReducer.loginInfos);
  const { email, password } = login;
  const registerClients = useSelector((state) => state.registerReducer);
  console.log(registerClients);
  const history = useHistory();
  function handleClickBtn() {
    history.push('/cadastro');
  }
  if (!email && !password) return (<h1>Faça o login antes de continuar</h1>);
  return (
    <div>
      {
        registerClients.length === 0 ? (
          <>
            <h2>Não há clientes registrados</h2>
            <button type="button" onClick={handleClickBtn}>
              Registrar Agora
            </button>
          </>
        ) : (
          <>
            <p>Teste</p>
            <button type="button" onClick={handleClickBtn}>
              Registrar Agora
            </button>

          </>
        )
      }
    </div>
  );
}

export default RegisterClients;
