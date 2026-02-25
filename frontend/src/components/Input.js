import React from 'react';
import { theme } from '../theme/colors';

function Input({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  required = false,
  id,
  name,
  className = ''
}) {
  const inputId = id || name;

  return (
    <div className="w-full">
      {label && (
        <label 
          className="block text-sm font-bold mb-2" 
          htmlFor={inputId}
          style={{ color: theme.colors.text.primary }}
        >
          {label} {required && <span style={{ color: theme.colors.danger }}>*</span>}
        </label>
      )}
      <input
        type={type}
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all ${className}`}
        style={{
          borderColor: theme.colors.input.border,
          backgroundColor: theme.colors.input.background,
        }}
        onFocus={(e) => {
          e.target.style.borderColor = theme.colors.input.focus;
          e.target.style.boxShadow = `0 0 0 3px ${theme.colors.primary[100]}`;
        }}
        onBlur={(e) => {
          e.target.style.borderColor = theme.colors.input.border;
          e.target.style.boxShadow = 'none';
        }}
      />
    </div>
  );
}

export default Input;
