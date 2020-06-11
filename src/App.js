import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {
  const [counter, setCounter] = useState(0);
  
  const [selectedProductId, setSelectedProductId] = useState(null);


  return (
    <div className="App">
      <Header counter={counter} setCounter={setCounter}></Header>
      <Body selectedProductId={selectedProductId}
            setSelectedProductId={setSelectedProductId}
            counter={counter}
            setCounter={setCounter}>
      </Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
