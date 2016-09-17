import merge from 'lodash/merge';
import { SearchConstants } from '../actions/search_actions';


const SearchReducer = function(state = {}, action){
  switch(action.type){
    case SearchConstants.RECEIVE_SEARCH:
      const newUsers = action.users.map((user) => {
        return {[user.id]: user};});
      return newUsers;
    default:
      return state;
  }
};

export default SearchReducer;
