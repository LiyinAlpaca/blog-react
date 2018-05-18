import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';


const Home = () => (
  <div>
    <Header />
    <h1>Home!</h1>
  </div>
);
const About = () => (
  <div>
    <Header />
    <h1>About</h1>
  </div>
);
const Topics = () => (
  <div>
    <Header />
    <h1>fuck u</h1>
  </div>
);

const NotFoundPage = () => (
  <div>
    <Header />
    <div>
      <h3>No match for <code>{window.location.pathname}</code></h3>
    </div>
  </div>
);

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default App;
