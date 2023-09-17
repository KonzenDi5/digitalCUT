import React from 'react';
import './estilos/estilosFooter.css'
import footer from './images/footer.png'

function Footer() {
  return (
    <div className='container'>
        <img className ='footer' src={footer} alt="LogoBrain" />
    </div>
  );
}

export default Footer;