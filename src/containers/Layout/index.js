import React from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Aux from '../../hoc/Aux';

import Footer from '../../components/Footer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Products from '../Products';
import Cart from '../Cart';
import Kit from '../Kit';
import Login from '../Login';
import Orders from '../Orders';
import withErrorHandler from '../../hoc/withErrorHandler';
import axios from '../../axios';


const layout = (props) => {

  const handleLogout = () => {
    props.logout();
  }

  const loginLink = <Link className="App-link" 
                to="/login">
                  Login
              </Link>

  const logoutLink = <a className="App-link" onClick={handleLogout}>Logout</a>


  return (

    

    <BrowserRouter>

      <header className="App-header">
        { props.isAuthenticated ? logoutLink : loginLink }

        <Link className="App-link" 
          to="/">
            Products
        </Link>

        <Link className="App-link" 
          to="/orders">
            Your orders
        </Link>

        <Link
            className="App-link"
            to="/kit"
        > Make your own kit
        </Link>

        <Link
            className="App-link"
            to="/cart"
            
        >
            My cart ({props.prdsCart.length})
        </Link>
        <p onClick={props.emptyCart}>Empty cart</p>
        
    </header>

    <Switch>
      <Route exact path="/" component={Products}/>
      <Route path="/cart" component={Cart} />
      <Route path="/kit" component={Kit} />
      <Route path="/orders" component={Orders} />
      <Route path="/login" component={Login} />
    </Switch>
      

    <Footer></Footer>
  </BrowserRouter>

    
  );
}

const mapStateToProps = state => {
    return {
      prdsCart: state.cart.productsCart,
      isAuthenticated: state.auth.isAuthenticated,
      username: state.auth.username
    };
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      emptyCart: () => dispatch({type: 'EMPTY_CART'}),
      logout: () => dispatch({type: 'LOGOUT'})
    };
  }
  

export default withErrorHandler(connect(mapStateToProps, mapDispatchToProps)(layout), axios);
