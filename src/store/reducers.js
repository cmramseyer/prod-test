import { combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
import authReducer from './reducers/authReducer';

export default combineReducers({
  cart: cartReducer,
  auth: authReducer
});
