import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" className="login" activeClassName="current">Login</Link>
    &nbsp;&nbsp;
    <Link to="/signup" className="signup" activeClassName="current">Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, logOut) => (
	<hgroup className="header-group">
		<h2 className="header-name">Hi, {currentUser.username}!</h2>
		<button className="header-button" onClick={logOut}>Log Out</button>
	</hgroup>
);


function Greeting({currentUser, logOut}){
  if (currentUser){
    return personalGreeting(currentUser, logOut);
  } else {
    return sessionLinks();
  }
}

export default Greeting;
