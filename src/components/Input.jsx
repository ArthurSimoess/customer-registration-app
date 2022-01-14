/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function Input({
  placeholder, onChange, value, name, type, label,
}) {
  return (
    <label htmlFor={name}>
      <span>{label}</span>
      <input
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Input;
