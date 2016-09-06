import { applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import SessionMiddleware from '../middleware/session_middleware';
import PhotosMiddleware from '../middleware/photos_middleware';
import UserMiddleware from '../middleware/user_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PhotosMiddleware,
  UserMiddleware,
  // logger()
);

export default RootMiddleware;
