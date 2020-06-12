import React from 'react';
import logo from '.././logo.svg';


function Header({counter, setCounter}) {
    
  return (
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
        
    </p>
    <a
        className="App-link"
        href="/"
        rel="noopener noreferrer"
    >
        Products
    </a>

    <a
        className="App-link"
        href="/cart"
        rel="noopener noreferrer"
    >
        My cart
    </a>
    <p>{counter}</p>
    </header>
  );
}

export default Header;
