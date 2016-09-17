// API Util
import { search
       } from '../util/search_api_util';
// Action
import { searchUsers,
         receiveSearch,
         SearchConstants
       } from '../actions/search_actions';


export default ({getState, dispatch}) => next => action => {
  const receiveSearchSuccess = data => dispatch(receiveSearch(data));
  const result = next(action);
  switch(action.type){
    case SearchConstants.SEARCH_USERS:
      search(action.username, receiveSearchSuccess);
      break;
    default:
      break;
  }
  return result;
};
