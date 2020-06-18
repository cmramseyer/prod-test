import React from 'react';
///IMPORT  LIBRERIA REDUX Y REDUX SAGA
import { createStore, applyMiddleware, compose } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import createSagaMiddleware from "redux-saga";

/// IMPORT INDICE DE  MIS SAGAS Y REDUCERS
import reducers from './reducers';
import App from '../App';
//import { watcherSaga } from './actions';


// CREAR MIDDLEWARE
//const sagaMiddleWare = createSagaMiddleware(); 

// INICAR STORE
    // DESARROLLO USAMOS UNOS TOOLS PARA DEBUGEAR EN CHROME Y MOZZILA
    //const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__();
    //const store = createStore(reducers,compose(applyMiddleware(sagaMiddleWare), reduxDevTools));
    // PRODUCCIÓN QUITAMOS EL DEBUGGER
    // const store = createStore(reducers,compose(applyMiddleware(sagaMiddleWare)));



// LANZAR MIDDLEWARE
//sagaMiddleWare.run(watcherSaga);


// CREAR UN WRAP
const ReduxWrap = (props) => {
    return (
        <ReduxProvider store={store}>
            
            {props.children}
        </ReduxProvider>
    )
}

export default ReduxWrap;