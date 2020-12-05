import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Products from '../Products';
import Cart from '../Cart';


//import NotFound from '../pages/NotFound';
//import Cart from "../pages/cart";

function Routes(props) {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Products}/>
            <Route path="/cart" component={Cart} />
        </Switch>
    </Router>
  );
}

export default Routes;