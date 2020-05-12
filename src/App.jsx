import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserProjects from './pages/UserProjects';
import Project from './pages/Project';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:username" component={UserProjects} />
        <Route path="/:username/:project" component={Project} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
