import React from 'react';
import { useHistory } from 'react-router-dom';

function HomePage() {
  const history = useHistory();
  function handleClick() {
    history.push('/login');
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
      >
        Página de Login
      </button>
    </div>
  );
}

export default HomePage;
