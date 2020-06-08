import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Header counter={counter} setCounter={setCounter}></Header>
      <Body counter={counter} setCounter={setCounter}></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
