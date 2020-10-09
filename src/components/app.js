import React, { Component } from 'react';
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NavigationContainer from './navigation/navigation-container';
import Home from "./pages/home";
import About from "./pages/about";
import Frequency from "./pages/frequency";
import Blog from "./pages/blog";
import AscensionDetail from "./ascension/ascension-detail";
import NoMatch from './pages/no-match';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
        <h1>Ascension</h1>
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
            <NavigationContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/frequency" component={Frequency} />
              <Route path="/blog" component={Blog} />
              <Route path="/ascension/:slug" component={AscensionDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
