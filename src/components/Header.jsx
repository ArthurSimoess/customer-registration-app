/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

function Header({ text, name }) {
  const history = useHistory();
  function handleFinish() {
    localStorage.removeItem('userData');
    history.push('/');
  }

  return (
    <header className="top-0 bg-black text-white p-4 w-full flex flex-col items-center gap-3 sm:flex-row sm:justify-around">
      <div className="sm:order-2">
        <p className="font-bold text-lg md:text-2xl">{text}</p>
      </div>
      <div className="sm:order-1">
        <p>
          Usuário:
          {' '}
          {name}
        </p>
      </div>
      <div className="sm:order-3">
        <button
          type="button"
          onClick={handleFinish}
          className="bg-gray-200 w-20 text-black p-1 rounded"
        >
          Encerrar
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Header;
