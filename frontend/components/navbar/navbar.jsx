import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" className="login" activeClassName="current">Login</Link>
    &nbsp;&nbsp;
    <Link to="/signup" className="signup" activeClassName="current">Sign up!</Link>
  </nav>
);

const loggedInNavBar = (currentUser, logOut, createPhoto) => (
	<section className="login-signup">
		<button className="logout" onClick={logOut}>Log Out</button>
    <Link to="/photos/new" className="photo-form" activeClassName="current">Beard Me!</Link>
	</section>
);


function NavBar({currentUser, logOut, createPhoto}){
  if (currentUser){
    return loggedInNavBar(currentUser, logOut, createPhoto);
  } else {
    return sessionLinks();
  }
}

export default NavBar;
