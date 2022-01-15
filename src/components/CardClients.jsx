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
    <div>
      {
        clients.map(({
          id, nome, idade, email, tel, cep, sexo,
        }) => (
          <div>
            {profilePic(sexo)}
            <p>{nome}</p>
            <p>{idade}</p>
            <p>{email}</p>
            <p>{tel}</p>
            <p>{cep}</p>
            <p>{sexo}</p>
            <button type="button" name={id} onClick={handleClick}>Remover Cliente</button>
          </div>
        ))
      }
    </div>
  );
}

export default CardClients;
