
import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import Projects from './components/projects';
import About from './components/about';
import Home from './components/home';
import Blog from './components/blog';
import Contact from './components/contact';
import { history } from './utils/history';

function App() {
  return (
      <div>
      <Router history={history}>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/contact" component={Contact}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
      </div>
  );
}

export default App;
