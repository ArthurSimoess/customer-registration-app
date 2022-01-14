/* eslint-disable default-param-last */
import { SET_LOGIN_VALUE } from '../action/index';

const initialState = {
  loginInfos: {
    email: '',
    password: '',
  },
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_VALUE:
      return { ...state, loginInfos: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
