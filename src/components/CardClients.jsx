import React from 'react';
import { useSelector } from 'react-redux';
import femaleProfile from '../images/femaleProfile.svg';
import maleProfile from '../images/maleProfile.svg';

function CardClients() {
  const registerClients = useSelector((state) => state.registerReducer);
  const { clients } = registerClients;

  function profilePic(sexo) {
    if (sexo === 'masculino') {
      return <img src={maleProfile} alt="maleProfile" width="150px" />;
    }
    return <img src={femaleProfile} alt="femaleProfile" width="150px" />;
  }
  return (
    <div>
      {
        clients.map(({
          nome, idade, email, tel, cep, sexo,
        }) => (
          <div>
            {profilePic(sexo)}
            <p>{nome}</p>
            <p>{idade}</p>
            <p>{email}</p>
            <p>{tel}</p>
            <p>{cep}</p>
            <p>{sexo}</p>
          </div>
        ))
      }
    </div>
  );
}

export default CardClients;
