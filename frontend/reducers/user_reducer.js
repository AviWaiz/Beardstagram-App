import merge from 'lodash/merge';
import { UserConstants } from '../actions/user_actions';


const UserReducer = function(state = {}, action){
  switch(action.type){
    case UserConstants.RECEIVE_USER:
      const newUser = {[action.user.id]: action.user};
      return merge({}, state, newUser);
    case UserConstants.RECEIVE_USERS:
      return action.users;
    default:
      return state;
  }
};

export default UserReducer;
