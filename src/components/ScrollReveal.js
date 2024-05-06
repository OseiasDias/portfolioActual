import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';




function ScrollRevealComponent({ targetClass }) {
    
  useEffect(() => {
    ScrollReveal().reveal(`.${targetClass}`, {
      delay: 200,
      distance: '50px',
      easing: 'ease-in-out',
      origin: 'bottom', 
      reset: true,
    });
  }, [targetClass]);

  return (
    <div className={targetClass}>
      {/* Conteúdo do componente aqui */}
    </div>
  );
}

export default ScrollRevealComponent;
