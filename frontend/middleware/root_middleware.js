import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import PhotosMiddleware from './photos_middleware';
import UserMiddleware from './user_middleware';
import SearchMiddleware from './search_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PhotosMiddleware,
  UserMiddleware,
  SearchMiddleware
);

export default RootMiddleware;
