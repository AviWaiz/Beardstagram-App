import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import PhotoReducer from './photos_reducer';
import UserReducer from './user_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  photos: PhotoReducer,
  users: UserReducer,
  search: SearchReducer
});

export default RootReducer;
