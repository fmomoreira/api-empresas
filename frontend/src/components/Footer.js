import React from 'react';
import { theme } from '../theme/colors';

function Footer() {
  return (
    <footer 
      className="fixed bottom-0 left-0 right-0 flex items-center justify-center"
      style={{
        backgroundColor: theme.colors.footer.background,
        height: '60px',
        zIndex: 50,
      }}
    >
      <p 
        className="flex items-center gap-2"
        style={{
          color: theme.colors.footer.text,
          fontSize: 'clamp(0.875rem, 2vw, 1rem)',
          margin: 0,
        }}
      >
        Desenvolvido por Gustavo Oliveira
        <span 
          style={{ 
            color: theme.colors.footer.heart,
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          }}
        >
          ❤️
        </span>
      </p>
    </footer>
  );
}

export default Footer;
