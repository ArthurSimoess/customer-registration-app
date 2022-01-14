import { combineReducers } from 'redux';
import loginReducer from './reducers';
import registerReducer from './RegisterClientReducer';

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
});

export default rootReducer;
