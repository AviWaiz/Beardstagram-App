import React from 'react';
import { Link } from 'react-router';

const SessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" className="login" activeClassName="current">Login</Link>
    &nbsp;&nbsp;
    <Link to="/signup" className="signup" activeClassName="current">Venture!</Link>
  </nav>
);

const LoggedInNavBar = ({currentUser, logOut, createPhoto}) => (
	<section className="login-signup">
		<Link to="/" className="logout" onClick={logOut}>Log Out</Link>
    <Link to="/photos/new" className="photo-form" activeClassName="current">Beard Me!</Link>
	</section>
);


class NavBar extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    if (this.props.currentUser){
      return(<LoggedInNavBar currentUser={this.props.currentUser}
                      logOut={this.props.logOut}
                      createPhoto={this.props.createPhoto} />
      )
    } else {
      return <SessionLinks />
    }
  }
}

export default NavBar;
