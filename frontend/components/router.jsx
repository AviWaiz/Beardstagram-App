import React from 'react';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Components
import App from './app';
// import Home from './home';
import SessionFormContainer from './session_form/session_form_container';
import PhotoIndexContainer from './photos/photo_index/photo_container';
import PhotoformContainer from './photos/photo_form/photo_form_container';
import PhotoFeedContainer from './photos/photo_feed/photo_feed_container';
import requestPhotos from '../actions/photo_actions';
import UserShowContainer from './user/user_show_container';
import { Home } from './home';
import { receiveCurrentUser } from '../actions/session_actions';
import { requestUser } from '../actions/user_actions';


class AppRouter extends React.Component {

  constructor(props) {
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._photoFeed = this._photoFeed.bind(this);
    this._userShow = this._userShow.bind(this);
  }

  _ensureLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (currentUser) {
      replace('/photos');
    }
  }

  _photoFeed(nextState, replace){
    this._ensureLoggedIn(nextState, replace);
    const currentUser = this.context.store.getState().session.currentUser
    this.context.store.dispatch(receiveCurrentUser(currentUser));
  }

  _userShow(nextState, replace) {
    this._ensureLoggedIn(nextState, replace);
    const userId = nextState.params.id
    this.context.store.dispatch(requestUser(userId));
  }

  render() {
    return(
      <Router history={hashHistory} >
        <Route path="/" component={App} >
        <Route path="/photos" component={ PhotoFeedContainer } onEnter={this._photoFeed}/>
        <Route path="/login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
        <Route path="/signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
        <Route path="/users/:id" component={ UserShowContainer } onEnter={this._userShow} />
        <Route path="/photos/new" component={ PhotoformContainer } onEnter={this._ensureLoggedIn}/>
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
