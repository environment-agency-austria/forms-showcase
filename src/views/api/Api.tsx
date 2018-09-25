import * as React from 'react';

import { Link, Redirect, Route, Switch } from 'react-router-dom';
import { Col, Nav, NavItem, NavLink, Row } from 'reactstrap';

import NotFound from '../not-found';
import BootstrapComponents from './bootstrap';
import CoreComponents from './core';
import IntlComponents from './intl';

export const Api = (): JSX.Element => {
  return (
    <Row>
      <Col md="8">
        <Switch>
          <Route path="/api/core" component={CoreComponents} />
          <Route path="/api/bootstrap" component={BootstrapComponents} />
          <Route path="/api/intl" component={IntlComponents} />
          <Redirect from="/api" to="/api/core/form" exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </Col>
      <Col md="4">
        <Nav vertical>
          <h6>react-ocean-forms</h6>
          <NavLink tag={Link} to="/api/core/form/">Form</NavLink>
          <NavLink tag={Link} to="/api/core/field/">Field</NavLink>
          <NavLink tag={Link} to="/api/core/field-group/">FieldGroup</NavLink>
          <NavLink tag={Link} to="/api/core/validation-summary/">ValidationSummary</NavLink>
          <NavLink tag={Link} to="/api/core/input/">Input</NavLink>
          <NavLink tag={Link} to="/api/core/form-button/">FormButton</NavLink>
          <NavLink tag={Link} to="/api/core/form-text/">FormText</NavLink>
          <NavLink tag={Link} to="/api/core/validators/">Validators</NavLink>
        </Nav>

        <Nav vertical>
          <h6 className="mt-4">react-ocean-forms-bootstrap</h6>
          <NavLink tag={Link} to="/api/bootstrap/input/">Input</NavLink>
          <NavLink tag={Link} to="/api/bootstrap/select/">Select</NavLink>
          <NavLink tag={Link} to="/api/bootstrap/check/">Check</NavLink>
          <NavLink tag={Link} to="/api/bootstrap/date-picker/">DatePicker</NavLink>
          <NavLink tag={Link} to="/api/bootstrap/validation-summary/">ValidationSummary</NavLink>
          <NavLink tag={Link} to="/api/bootstrap/form-button/">FormButton</NavLink>
          <NavLink tag={Link} to="/api/bootstrap/on-off-toggle-button/">OnOffToggleButton</NavLink>
        </Nav>

        <Nav vertical>
          <h6 className="mt-4">react-ocean-forms-react-intl</h6>
          <NavItem>
            <NavLink tag={Link} to="/api/intl/intl-form/">IntlForm</NavLink>
          </NavItem>
        </Nav>
      </Col>
    </Row>
  );
};
