import React  from 'react';
import ReactDOM  from 'react-dom';




class navBar extends React.Component{
  render() {
    return (<nav className="login-signup">
     <Link to="/login" activeClassName="current">Login</Link>
     &nbsp;or&nbsp;
     <Link to="/signup" activeClassName="current">Sign up!</Link>
   </nav>);
  }
}

export default navBar;
