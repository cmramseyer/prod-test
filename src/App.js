import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { BrowserRouter } from "react-router-dom";
import Routes from './routes';

function App() {
  const [counter, setCounter] = useState(0);
  const [selectedProductId, setSelectedProductId] = useState(null);

  var props = {
    counter: counter,
    setCounter: setCounter,
    selectedProductId: selectedProductId,
    setSelectedProductId: setSelectedProductId
  }

  return (
    <div className="App">
      <Header counter={counter} setCounter={setCounter}></Header>

      <BrowserRouter>
        <Routes {...props}>
        </Routes>
        
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
