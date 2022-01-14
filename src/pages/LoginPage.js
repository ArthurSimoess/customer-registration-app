import React from 'react';

function LoginPage() {
  return (
    <div>
      <form>
        <label htmlFor="email">
          <span>Email:</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
          />
        </label>
        <label htmlFor="password">
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
        </label>
      </form>
    </div>
  );
}

export default LoginPage;
