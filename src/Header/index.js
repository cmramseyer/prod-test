import React, { useContext } from 'react'
import UserContext from '../UserContext'
import logo from '.././logo.svg';


function Header({counter, setCounter}) {

  const [user, toggle, setToggle] = useContext(UserContext)
    
  return (
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
        user: {user.name}, language: {user.lang}, toggle: {toggle}
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
