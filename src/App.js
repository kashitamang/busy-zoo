import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

import BusyZoo from './BusyZoo';
import Admin from './Components/Admin';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Busy Zoo</Link>
            </li>
            <li>
              <Link to="/about">Admin</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<Admin/>}/>
          <Route path="/" element={<BusyZoo/>}/>
        </Routes>
      </div>
    </Router>
  );
}

