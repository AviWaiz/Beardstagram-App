import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import PhotosMiddleware from './photos_middleware';
import UserMiddleware from './user_middleware';
import SearchMiddleware from './search_middleware';
import logger from 'redux-logger';
const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PhotosMiddleware,
  UserMiddleware,
  SearchMiddleware,
  logger()
);

export default RootMiddleware;
