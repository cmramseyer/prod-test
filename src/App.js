import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { BrowserRouter } from "react-router-dom";
import Routes from './routes';
import UserContext from './UserContext'
import { Provider, useSelector, useDispatch } from 'react-redux'


function App() {
  const [counter, setCounter] = useState(0);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const user = {name: "charlie", lang: "EN"};
  const [toggle, setToggle] = useState("NO");

  const [productsInCart, setProductsInCart] = useState([]);

  var props = {
    counter: counter,
    setCounter: setCounter,
    selectedProductId: selectedProductId,
    setSelectedProductId: setSelectedProductId
  }


  return (
    
    <UserContext.Provider value={[user, toggle, setToggle, productsInCart, setProductsInCart]}>
      <div className={`App`}>
        <Header counter={counter} setCounter={setCounter}></Header>

        <BrowserRouter>
          <Routes {...props}>
          </Routes>
        
        </BrowserRouter>
        <Footer></Footer>
      </div>
    </UserContext.Provider>
    
  );
}

export default App;
