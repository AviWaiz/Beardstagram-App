// Photo API Util
import { fetchPhotos,
         fetchPhoto,
         createReview,
         createPhoto
       } from '../util/photo_api_util';
// Photo Action
import { requestPhotos,
         receivePhoto,
         receivePhotos,
         PhotoConstants
       } from '../actions/photo_actions';


export default ({getState, dispatch}) => next => action => {
  const photosSuccess = data => dispatch(receivePhotos(data));
  const photoSuccess = data => dispatch(receivePhoto(data));
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
    default:
      break;
  }
  return result;
};
