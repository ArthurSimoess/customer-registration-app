export const SET_LOGIN_VALUE = 'SET_LOGIN_VALUE';
export const SET_REGISTER_CLIENT = 'SET_REGISTER_CLIENT';

// payload é o local na minha action, onde as informações atualizada vão ficar
// O nome payload em si é uma convenção.

export const setLoginValue = (payload) => ({
  type: SET_LOGIN_VALUE, payload,
});

export const setRegisterClient = (payload) => ({
  type: SET_REGISTER_CLIENT, payload,
});
