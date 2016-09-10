import React from 'react';
import { Link } from 'react-router';
import Search from '../user/search';

const SessionLinks = () => (
  <nav className="login-signup">
  <div>
    <Link to="/login" className="login" activeClassName="current">Login</Link>
    &nbsp;&nbsp;
    <Link to="/signup" className="signup" activeClassName="current">Venture!</Link>
    </div>
  </nav>
);

const LoggedInNavBar = ({currentUser, logOut, createPhoto, searchUsers, users}) => (
	<section className="logout-beardme-search">
    <Search searchUsers={searchUsers} users={users} />
    <div className="logout-beardme">
      <Link to="/" className="logout" onClick={logOut}>LogOut</Link>
      <Link to="/photos/new" className="photo-form" activeClassName="current">Beard Me!</Link>
    </div>
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
                      createPhoto={this.props.createPhoto}
                      searchUsers={this.props.searchUsers}
                      users={this.props.users} />
      );
    } else {
      return <SessionLinks />;
    }
  }
}

export default NavBar;
