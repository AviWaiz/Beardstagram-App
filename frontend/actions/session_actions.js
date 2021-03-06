export const SessionConstants = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SIGNUP: "SIGNUP",
  RECEIVE_CURRENT_USER: "RECEIVE_CURRENT_USER",
  REQUEST_CURRENT_USER: "REQUEST_CURRENT_USER",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const logIn = (user) => ({
    type: SessionConstants.LOGIN,
    user
});

export const logOut = () => ({
    type: SessionConstants.LOGOUT
});

export const signUp = (user) => ({
    type: SessionConstants.SIGNUP,
    user
});

export const requestCurrentUser = () => ({
    type: SessionConstants.REQUEST_CURRENT_USER,
});


export const receiveCurrentUser = currentUser => ({
  type: SessionConstants.RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: SessionConstants.RECEIVE_ERRORS,
  errors
});
