import React from 'react';
import { Link } from 'react-router';
import Search from '../user/search';
import Icon from '../photos/photo_form/icon';


const SessionLinks = () => (
  <nav className="login-signup">
  <div>
    <Link to="/login" className="login" activeClassName="current">Login</Link>
    &nbsp;&nbsp;
    <Link to="/signup"
          className="signup"
          activeClassName="current">
          Venture!
    </Link>
    </div>
  </nav>
);

const LoggedInNavBar = ({currentUser, logOut, createPhoto, searchUsers, search, location}) => (
	<section className="logout-beardme-search">
    <Link to="/photos" className="nav-link">
      <h1 className="logo">
        <Icon className="icons"
              src='feed_icon.png'
              width={36}
              height={36}/>
      </h1>
    </Link>
    <Search searchUsers={searchUsers} search={search} location={location} />
    <div className="logout-beardme">
      <Link to="/" className="logout" onClick={logOut}>LogOut</Link>
      <Link to="/photos/new"
            className="photo-form"
            activeClassName="current">
            Beard Me!
      </Link>
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
                      search={this.props.search}
                      location={this.props.location} />
      );
    } else {
      return <SessionLinks />;
    }
  }
}

export default NavBar;
