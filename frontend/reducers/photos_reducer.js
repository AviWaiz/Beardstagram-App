import merge from 'lodash/merge';
import { PhotoConstants } from '../actions/photo_actions';

const PhotoReducer = function(state = {}, action){
  switch(action.type){
    case PhotoConstants.RECEIVE_PHOTOS:
      return action.photos;
    default:
      return state;
  }
};

export default PhotoReducer;
