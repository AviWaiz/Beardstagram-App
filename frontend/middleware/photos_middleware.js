// Photo API Util
import { fetchPhotos,
         fetchPhoto,
         createReview,
         createPhoto,
         createComment,
         removeComment
       } from '../util/photo_api_util';
// Photo Action
import { receivePhoto,
         receivePhotos,
         PhotoConstants,
         receiveComment,
         deleteComment
       } from '../actions/photo_actions';



export default ({getState, dispatch}) => next => action => {
  const photosSuccess = data => dispatch(receivePhotos(data));
  const photoSuccess = data => dispatch(receivePhoto(data));
  const commentSucces = data => dispatch(receiveComment(data));
  const commentDeleteSuccess = data => dispatch(deleteComment(data));
  const result = next(action);

  switch(action.type){
    case PhotoConstants.REQUEST_PHOTOS:
      fetchPhotos(photosSuccess);
      break;
    case PhotoConstants.REQUEST_PHOTO:
      fetchPhoto(action.id, photoSuccess);
      break;
    case PhotoConstants.CREATE_PHOTO:
      createPhoto(action.photo, photoSuccess);
      break;
    case PhotoConstants.CREATE_COMMENT:
      createComment(action.comment, commentSucces);
      break;
    case PhotoConstants.REMOVE_COMMENT:
      removeComment(action.id, commentDeleteSuccess);
      break;
    default:
      break;
  }
  return result;
};
