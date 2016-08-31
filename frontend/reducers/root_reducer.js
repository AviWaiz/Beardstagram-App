import { combineReducers } from 'redux';

import SessionReducer from '../reducers/session_reducer';
import PhotoReducer from '../reducers/photos_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  photos: PhotoReducer
});

export default RootReducer;
