import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import femaleProfile from '../images/femaleProfile.svg';
import maleProfile from '../images/maleProfile.svg';
import { setDeleteClient } from '../redux/action';

function CardClients() {
  const [order, setOrder] = useState(false);
  const registerClients = useSelector((state) => state.registerReducer);
  const { clients } = registerClients;
  const dispatch = useDispatch();

  function profilePic(sexo) {
    if (sexo === 'masculino') {
      return <img src={maleProfile} alt="maleProfile" width="150px" />;
    }
    return <img src={femaleProfile} alt="femaleProfile" width="150px" />;
  }

  function handleClick({ target: { name } }) {
    const filterClients = clients.filter((client) => (
      Number(client.id) !== Number(name)
    ));
    dispatch(setDeleteClient(filterClients));
  }

  function handleOrder() {
    setOrder(!order);
  }

  function orderClients() {
    const ordened = [...clients];
    if (order) {
      return ordened.sort((a, b) => {
        if (a.nome > b.nome) {
          return 1;
        } if (b.nome > a.nome) {
          return -1;
        }
        return 0;
      });
    }
    return clients;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        type="button"
        onClick={handleOrder}
        className="bg-indigo-400 p-2 text-black rounded-lg mb-5 border-2 border-black mt-4"
      >
        Ordernar Clientes
      </button>
      <div className="sm:flex sm:flex-wrap sm:gap-10">
        {
          orderClients().map(({
            id, nome, idade, email, sexo,
          }) => (
            <div className="flex flex-col items-center border-2 border-black p-4 gap-2 mb-10">
              {profilePic(sexo)}
              <p>{nome}</p>
              <p>{idade}</p>
              <p>{email}</p>
              <p>{sexo}</p>
              <button
                type="button"
                name={id}
                onClick={handleClick}
                className="bg-black p-2 text-white rounded-lg"
              >
                Remover Cliente
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default CardClients;
