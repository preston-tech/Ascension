import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavLink exact to="/">
          Home
        </NavLink>

        <NavLink to="/about" activeClassName="nav-link-active">About</NavLink>
        <NavLink to="/frequency" activeClassName="nav-link-active">Frequency</NavLink>
        <NavLink to="/blog" activeClassName="nav-link-active">Blog</NavLink>

        {false ? <button>Add Blog</button> : null}
      </div>
    );
  }
}