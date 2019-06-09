import React from 'react';
import GithubState from './contexts/github/GithubState';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/layouts/NavBar';
import UserList from './components/users/UserList';
import About from './components/About';
import UserDetail from './components/users/UserDetail';

function App() {
  return (
    <GithubState>
      <Router>
        <NavBar />
        <div className="ui container">
          <Switch>
            <Route exact path="/" component={UserList} />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:text" component={UserDetail} />
          </Switch>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;
