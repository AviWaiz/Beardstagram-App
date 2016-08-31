import React from 'react';
import { Link } from 'react-router';
import NavBarContainer from './navbar/navbar_container';

const App = ({children}) => (
  <div>
    <nav className="nav_bar">
      <Link to="/" className="nav-link"><h1 className="logo">BeardStagram</h1></Link>
      <NavBarContainer />
    </nav>
    {children}
  </div>
);

export default App;
