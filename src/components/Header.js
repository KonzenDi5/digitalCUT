import React from 'react';
import './estilos/estilosHeader.css'
import header from './images/logo.png'

function Header() {
  return (
    <div className='container'>
        <img className ='logo' src={header} alt="LogoBrain" />
    </div>
  );
}

export default Header;