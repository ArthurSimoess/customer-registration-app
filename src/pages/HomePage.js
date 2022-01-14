import React from 'react';
import { useHistory } from 'react-router-dom';

function HomePage() {
  function handleClick() {
    const history = useHistory();
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
