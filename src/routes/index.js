import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Body from '../Body';
import Cart from '../Cart';
//import NotFound from '../pages/NotFound';
//import Cart from "../pages/cart";

function Routes(props) {
    console.log("props lala");
    console.log(props);
  return (
    <Router>
        <Switch>
            <Route 
                exact path="/" 
                render={() => <Body {... props} /> }/>
            <Route path="/cart" component={Cart} />
            
        </Switch>
    </Router>
  );
}

export default Routes;