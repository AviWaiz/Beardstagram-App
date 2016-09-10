import React from 'react';
import { Link } from 'react-router';
import NavBarContainer from './navbar/navbar_container';
import Icon from './photos/photo_form/icon';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname === "/") {
      document.getElementById("background").classList.add("show");
    } else {
      document.getElementById("background").classList.remove("show");
    }
  }

  componentDidMount() {
    if (this.props.location.pathname === "/") {
      document.getElementById("background").classList.add("show");
    } else {
      document.getElementById("background").classList.remove("show");
    }
  }

  render(){
    return(
      <div id='background' className="background">
        <nav className="nav_bar">
          <Link to="/" className="nav-link"><h1 className="logo">BeardStagram</h1></Link>
          <Link to="/photos" className="nav-link">
          <h1 className="logo">
            <Icon className="icons"
                  src='feed_icon.png'
                  width={36}
                  height={36}
                  changeIcon={this.changeIcon}/>
            </h1>
          </Link>
          <NavBarContainer />
          </nav>
          {this.props.children}
      </div>
    );
  }
}

export default App;
