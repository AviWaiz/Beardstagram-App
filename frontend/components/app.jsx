import React from 'react';
import { Link } from 'react-router';
import NavBarContainer from './navbar/navbar_container';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname === "/") {
      document.getElementById("background").classList.add("show");
      $("#logo").css("color", "white");
    } else {
      document.getElementById("background").classList.remove("show");
      $("#logo").css("color", "black");

    }
  }

  componentDidMount() {
    if (this.props.location.pathname === "/") {
      document.getElementById("background").classList.add("show");
      $("#logo").css("color", "white");
    } else {
      document.getElementById("background").classList.remove("show");
      $("#logo").css("color", "black");
    }
  }

  render(){
    return(
      <div id='background' className="background">
        <nav className="nav_bar">
          <Link to="/" className="nav-link">
            <h1 className="logo" id="logo">
              BeardStagram
            </h1>
          </Link>
          <NavBarContainer location={this.props.location}/>
          </nav>
          {this.props.children}
      </div>
    );
  }
}

export default App;
