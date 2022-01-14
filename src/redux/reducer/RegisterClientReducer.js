/* eslint-disable default-param-last */
import { SET_REGISTER_CLIENT, SET_DELETE_CLIENT } from '../action';

const initialState = {
  clients: [],
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case (SET_REGISTER_CLIENT):
      return ({
        clients: [
          ...state.clients,
          { id: state.clients.length, ...action.payload },
        ],
      });
    case (SET_DELETE_CLIENT):
      console.log(action.payload);
      return ({
        clients: [...action.payload],
      });
    default:
      return state;
  }
};

export default registerReducer;
