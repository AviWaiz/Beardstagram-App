import { applyMiddleware } from 'redux';

import SessionMiddleware from '../middleware/session_middleware';
import PhotosMiddleware from '../middleware/photos_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PhotosMiddleware
);

export default RootMiddleware;
