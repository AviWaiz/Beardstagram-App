import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';
import PhotosMiddleware from '../middleware/photos_middleware';
import UserMiddleware from '../middleware/user_middleware';
import SearchMiddleware from '../middleware/search_middleware';
import logger from 'redux-logger';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PhotosMiddleware,
  UserMiddleware,
  SearchMiddleware,
  logger()
);

export default RootMiddleware;
