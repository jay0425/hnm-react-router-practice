import { combineReducers } from 'redux';
import authenticateReducer from './authunticateReducer';
import productReducer from './productReducer';

export default combineReducers({
  auth: authenticateReducer,
  product: productReducer,
});
