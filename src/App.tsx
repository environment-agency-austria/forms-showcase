import * as React from 'react';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

import 'babel-polyfill';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-datetime/css/react-datetime.css';

// @ts-ignore
import Prism from "prismjs";

import Api from './views/api';
import Components from './views/components';
import Home from './views/home';
import NotFound from './views/not-found';

interface IAppState {
  isOpen: boolean;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  private toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // tslint:disable-next-line:member-ordering
  public render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar color="dark" expand="md" fixed="top">
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
                <Route path="*" component={NotFound} />
              </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
