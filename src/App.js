import React from 'react';
import GithubState from './contexts/github/GithubState';

import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/layouts/NavBar';
import UserList from './components/users/UserList';

function App() {
  return (
    <GithubState>
      <Router>
        <NavBar />
        <div className="ui container">
          <div className="ui segment">
            <UserList />
          </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;
