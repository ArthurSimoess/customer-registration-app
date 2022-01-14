/* eslint-disable default-param-last */
import { SET_REGISTER_CLIENT } from '../action';

const initialState = [];

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case (SET_REGISTER_CLIENT):
      return ([...state, { [action.payload.nome]: { ...action.payload } }]);
    default:
      return state;
  }
};

export default registerReducer;
