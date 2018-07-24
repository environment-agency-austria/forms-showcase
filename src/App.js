import React, { Component } from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.css';
import Prism from "prismjs"; // eslint-disable-line

import Home from './views/home';
import Components from './views/components';
import Api from './views/api';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <HashRouter onUpdate={() => { window.scrollTo(0, 0) }}>
        <div className="App">
          <Navbar dark color="dark" expand="md" fixed="top">
            <NavbarBrand tag={Link} to="/">Ocean Forms</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/components">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/api">API</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/environment-agency-austria/react-ocean-forms">GitHub</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

          <div className="content container">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/components" component={Components} />
                <Route path="/api" component={Api} />
              </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
