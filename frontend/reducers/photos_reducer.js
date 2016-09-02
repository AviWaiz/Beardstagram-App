import merge from 'lodash/merge';
import { PhotoConstants } from '../actions/photo_actions';
import { UserConstants } from '../actions/user_actions';

const PhotoReducer = function(state = {}, action){
  let newPhotos;
  switch(action.type){
    case PhotoConstants.RECEIVE_PHOTOS:
      newPhotos = merge({}, state, action.photos);
      return newPhotos;
    case PhotoConstants.RECEIVE_PHOTO:
      const newPhoto ={[action.photo]: action.photo};
      return merge({}, state, newPhoto);
    case UserConstants.RECEIVE_USER:
      newPhotos = merge({}, state, action.user.photos);
      return newPhotos;
    default:
      return state;
  }
};

export default PhotoReducer;
