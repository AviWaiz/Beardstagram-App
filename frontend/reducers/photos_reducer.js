import merge from 'lodash/merge';
import { PhotoConstants } from '../actions/photo_actions';
import { UserConstants } from '../actions/user_actions';
import {SessionConstants} from '../actions/session_actions';

const PhotoReducer = function(state = {}, action){
  let newPhotos = {};
  let newPhoto;
  let idx;
  switch(action.type){
    case PhotoConstants.RECEIVE_PHOTOS:
      action.photos.forEach( photo => ( newPhotos[photo.id] = photo))
      newPhotos = merge({}, state, newPhotos);
      return newPhotos;
    case PhotoConstants.RECEIVE_PHOTO:
      newPhoto ={[action.photo.id]: action.photo};
      return merge({}, state, newPhoto);
    case UserConstants.RECEIVE_USER:
      action.user.photos.forEach( photo => ( newPhotos[photo.id] = photo))
      return newPhotos;
    case SessionConstants.RECEIVE_CURRENT_USER:
      action.currentUser.photos.forEach( photo => ( newPhotos[photo.id] = photo))
      return Object.assign({}, newPhotos);
    case PhotoConstants.RECEIVE_COMMENT:
      newPhoto = merge({}, state[action.comment.photo_id]);
      newPhoto.comments.push(action.comment);
      return merge({}, state, {[newPhoto.id]: newPhoto});
    case PhotoConstants.DELETE_COMMENT:
      newPhoto = merge({}, state[action.comment.photo_id]);
      newPhoto.comments.forEach( comment => {
        if (comment.id === action.comment.id) {
          idx = newPhoto.comments.indexOf(comment);
        }
      });
      newPhoto.comments = [...newPhoto.comments.slice(0, idx),
                           ...newPhoto.comments.slice(idx + 1)]
      return Object.assign({}, state, {[newPhoto.id]: newPhoto});;
    default:
      return state;
  }
};

export default PhotoReducer;
