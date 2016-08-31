import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" className="login" activeClassName="current">Login</Link>
    &nbsp;&nbsp;
    <Link to="/signup" className="signup" activeClassName="current">Sign up!</Link>
  </nav>
);

const loggedInNavBar = (currentUser, logOut) => (
	<section className="login-signup">
		<button className="logout" onClick={logOut}>Log Out</button>
	</section>
);


function NavBar({currentUser, logOut}){
  if (currentUser){
    return loggedInNavBar(currentUser, logOut);
  } else {
    return sessionLinks();
  }
}

export default NavBar;
