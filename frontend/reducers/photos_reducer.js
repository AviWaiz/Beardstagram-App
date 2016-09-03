import merge from 'lodash/merge';
import { PhotoConstants } from '../actions/photo_actions';
import { UserConstants } from '../actions/user_actions';

const PhotoReducer = function(state = {}, action){
  let newPhotos = {};
  let newPhoto;
  switch(action.type){
    case PhotoConstants.RECEIVE_PHOTOS:
      action.photos.forEach( photo => ( newPhotos[photo.id] = photo))
      newPhotos = merge({}, state, newPhotos);
      return newPhotos;
    case PhotoConstants.RECEIVE_PHOTO:
      newPhoto ={[action.photo.id]: action.photo};
      return merge({}, state, newPhoto);
    case UserConstants.RECEIVE_USER:
      newPhotos = merge({}, state, action.user.photos);
      return newPhotos;
    case PhotoConstants.RECEIVE_COMMENT:
      newPhoto = merge({}, state[action.comment.photo_id]);
      newPhoto.comments.push(action.comment);
      return merge({}, state, {[newPhoto.id]: newPhoto});
    default:
      return state;
  }
};

export default PhotoReducer;
