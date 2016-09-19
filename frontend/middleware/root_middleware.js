import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';
import PhotosMiddleware from '../middleware/photos_middleware';
import UserMiddleware from '../middleware/user_middleware';
import SearchMiddleware from '../middleware/search_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PhotosMiddleware,
  UserMiddleware,
  SearchMiddleware
);

export default RootMiddleware;
