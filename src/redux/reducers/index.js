import { combineReducers } from 'redux';
import authenticateReducer from './authunticateReducer';
import productReducer from './productSlice';

export default combineReducers({
  auth: authenticateReducer,
  product: productReducer,
});
