import { SessionConstants,
         receiveCurrentUser,
         receiveErrors } from '../actions/session_actions';
import {logIn, logOut, signUp, requestCurrentUser} from '../util/session_api_util.js';

export default ({getState, dispatch}) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = xhr => {
    const error = xhr.responseJSON;
    dispatch(receiveErrors(error));
  };
  switch (action.type) {
    case SessionConstants.LOGIN:
      logIn(action.user, successCallback, errorCallback);
      return next(action);
    case SessionConstants.LOGOUT:
      logOut(() => next(action));
      break;
    case SessionConstants.SIGNUP:
      signUp(action.user, successCallback, errorCallback);
      return next(action);
    case SessionConstants.REQUEST_CURRENT_USER:
      requestCurrentUser(successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
