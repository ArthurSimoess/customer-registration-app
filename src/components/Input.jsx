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
        className="p-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-gray-100 rounded-sm"
        required
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
