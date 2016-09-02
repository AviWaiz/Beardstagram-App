import { combineReducers } from 'redux';

import SessionReducer from '../reducers/session_reducer';
import PhotoReducer from '../reducers/photos_reducer';
import UserReducer from '../reducers/user_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  photos: PhotoReducer,
  users: UserReducer
});

export default RootReducer;
