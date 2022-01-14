import React from 'react';

function Input({ placeholder, onChange, value, name }) {
  return (
    <input
      type="text"
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
}

export default Input;
