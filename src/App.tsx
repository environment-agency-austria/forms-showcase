import React from 'react';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

import { asyncComponent } from './components/asyncComponent';

const asyncApi = asyncComponent(() => import('./views/api'));
const asyncComponents = asyncComponent(() => import('./views/components'));
const asyncHome = asyncComponent(() => import('./views/home'));
const asyncNotFound = asyncComponent(() => import('./views/not-found'));

interface IAppState {
  isOpen: boolean;
}

export class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  private toggle = (): void => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  // tslint:disable-next-line:member-ordering
  public render(): JSX.Element {
    return (
      <HashRouter>
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
                <Route path="/" exact component={asyncHome} />
                <Route path="/components" component={asyncComponents} />
                <Route path="/api" component={asyncApi} />
                <Route path="*" component={asyncNotFound} />
              </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}
