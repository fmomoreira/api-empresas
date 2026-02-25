import React from 'react';
import { theme } from '../theme/colors';

function Button({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary',
  className = ''
}) {
  const variants = {
    primary: {
      backgroundColor: theme.colors.primary,
      hoverBackgroundColor: theme.colors.primaryHover,
      color: theme.colors.text.inverse,
    },
    secondary: {
      backgroundColor: theme.colors.secondary,
      hoverBackgroundColor: theme.colors.secondaryHover,
      color: theme.colors.text.primary,
    },
    danger: {
      backgroundColor: theme.colors.danger,
      hoverBackgroundColor: theme.colors.dangerHover,
      color: theme.colors.text.inverse,
    },
    success: {
      backgroundColor: theme.colors.success,
      hoverBackgroundColor: theme.colors.successHover,
      color: theme.colors.text.inverse,
    },
  };

  const variantStyle = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`font-semibold py-2 px-4 rounded-lg transition duration-200 ${className}`}
      style={{
        backgroundColor: variantStyle.backgroundColor,
        color: variantStyle.color,
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = variantStyle.hoverBackgroundColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = variantStyle.backgroundColor;
      }}
    >
      {children}
    </button>
  );
}

export default Button;
