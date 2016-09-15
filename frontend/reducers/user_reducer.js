import merge from 'lodash/merge';
import { UserConstants } from '../actions/user_actions';


const UserReducer = function(state = {}, action){
  switch(action.type){
    case UserConstants.RECEIVE_USER:
      const newUser = {[action.user.id]: action.user};
      return [newUser];
    case UserConstants.RECEIVE_USERS:
      const newUsers = action.users.map((user) => {
        return {[user.id]: user};});
      return newUsers;
    default:
      return state;
  }
};

export default UserReducer;
