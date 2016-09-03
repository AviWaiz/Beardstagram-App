//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
//Actions
import configureStore from './store/store';
// import { signUp, logIn, logOut} from './util/session_api_util';
import { fetchPhoto, fetchPhotos, removeComment } from './util/photo_api_util';
import { fetchUser, fetchUsers } from './util/user_api_util';
// import { logIn, logOut, signUp, receiveErrors,
//    receiveCurrentUser } from './actions/session_actions';
import { requestPhotos, requestPhoto } from './actions/photo_actions';
// window.signUp = signUp;
// window.logIn = logIn;
// window.logOut = logOut;
// window.receiveErrors = receiveErrors;
// window.receiveCurrentUser = receiveCurrentUser;
window.fetchPhoto = fetchPhoto;
window.fetchUser = fetchUser;
window.fetchUsers = fetchUsers;
window.fetchPhotos = fetchPhotos;
window.requestPhotos = requestPhotos;
window.requestPhoto = requestPhoto;
window.removeComment = removeComment;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const initialState = {session: {currentUser: window.currentUser}};
    window.store = store = configureStore(initialState);
  } else {
    window.store = store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
