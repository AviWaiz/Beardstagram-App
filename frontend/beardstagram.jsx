//React
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
//Components
import Root from './components/root';
//Actions
import configureStore from './store/store';
import merge from 'lodash/merge';
import isEmpty from 'lodash/isEmpty';
import { signUp, logIn, logOut} from './util/session_api_util';
import { fetchPhoto, fetchPhotos, removeComment } from './util/photo_api_util';
import { fetchUser, fetchUsers, createFollow, destroyFollow } from './util/user_api_util';
import { search } from './util/search_api_util';
// import { logIn, logOut, signUp, receiveErrors,
//    receiveCurrentUser } from './actions/session_actions';
import { requestPhotos, requestPhoto, createPhoto } from './actions/photo_actions';
// window.signUp = signUp;
// window.logIn = logIn;
window.logOut = logOut;
// window.receiveErrors = receiveErrors;
// window.receiveCurrentUser = receiveCurrentUser;
window.fetchPhoto = fetchPhoto;
window.fetchUser = fetchUser;
window.fetchUsers = fetchUsers;
window.search = search;
window.merge = merge;
window.isEmpty = isEmpty;
window.createFollow = createFollow;
window.destroyFollow = destroyFollow;


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const initialState = {session: {currentUser: window.currentUser}};
    window.store = store = configureStore(initialState);
  } else {
    window.store = store = configureStore();
  }
  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
