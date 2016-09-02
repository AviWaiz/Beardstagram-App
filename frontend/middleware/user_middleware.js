// API Util
import { fetchUser,
         fetchUsers
       } from '../util/user_api_util';
// Action
import { receiveUser,
         receiveUsers,
         UserConstants
       } from '../actions/user_actions';


export default ({getState, dispatch}) => next => action => {
  const receiveUserSuccess = data => dispatch(receiveUser(data));
  const receiveUsersSuccess = data => dispatch(receiveUsers(data));
  const result = next(action);
  switch(action.type){
    case UserConstants.REQUEST_USER:
      fetchUser(action.id, receiveUserSuccess);
      break;
    case UserConstants.REQUEST_USERS:
      fetchUsers(action, receiveUsersSuccess);
      break;
    default:
      break;
  }
  return result;
};