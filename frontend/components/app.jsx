import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => (
  <div>
    <header className="nav_bar">
      <Link to="/" className="header-link"><h1>BeardStagram</h1></Link>
      <GreetingContainer />
    </header>
    {children}
  </div>
);

export default App;
