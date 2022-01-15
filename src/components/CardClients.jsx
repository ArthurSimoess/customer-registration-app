import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import femaleProfile from '../images/femaleProfile.svg';
import maleProfile from '../images/maleProfile.svg';
import { setDeleteClient } from '../redux/action';

function CardClients() {
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

  return (
    <div className="sm:flex sm:flex-wrap sm:gap-10">
      {
        clients.map(({
          id, nome, idade, email, tel, cep, sexo,
        }) => (
          <div className="flex flex-col items-center border-2 border-black p-4 gap-2 mb-10">
            {profilePic(sexo)}
            <p>{nome}</p>
            <p>{idade}</p>
            <p>{email}</p>
            <p>{tel}</p>
            <p>{cep}</p>
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
  );
}

export default CardClients;
