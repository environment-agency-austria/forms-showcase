import React from 'react';
import { Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import { Switch, Route, Link } from 'react-router-dom';

import CoreComponents from './core';
import BootstrapComponents from './bootstrap';
import IntlComponents from './intl';
import NotFound from '../not-found';

function Components() {
  return (
    <Row>
      <Col md="8">
        <Switch>
          <Route path="/components/core" component={CoreComponents} />
          <Route path="/components/bootstrap" component={BootstrapComponents} />
          <Route path="/components/intl" component={IntlComponents} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Col>
      <Col md="4">
        <Nav vertical>
          <h6>react-ocean-forms</h6>
          <NavLink tag={Link} to="/components/core/form/">Form</NavLink>
          <NavLink tag={Link} to="/components/core/field/">Field</NavLink>
          <NavLink tag={Link} to="/components/core/field-group/">FieldGroup</NavLink>
          <NavLink tag={Link} to="/components/core/validation-summary/">ValidationSummary</NavLink>
          <NavLink tag={Link} to="/components/core/input/">Input</NavLink>
          <NavLink tag={Link} to="/components/core/form-button/">FormButton</NavLink>
        </Nav>

        <Nav vertical>
          <h6 className="mt-4">react-ocean-forms-bootstrap</h6>
          <NavLink tag={Link} to="/components/bootstrap/input/">Input</NavLink>
          <NavLink tag={Link} to="/components/bootstrap/select/">Select</NavLink>
          <NavLink tag={Link} to="/components/bootstrap/check/">Check</NavLink>
          <NavLink tag={Link} to="/components/bootstrap/date-picker/">DatePicker</NavLink>
          <NavLink tag={Link} to="/components/bootstrap/validation-summary/">ValidationSummary</NavLink>
          <NavLink tag={Link} to="/components/bootstrap/form-button/">FormButton</NavLink>
          <NavLink tag={Link} to="/components/bootstrap/on-off-toggle-button/">OnOffToggleButton</NavLink>
        </Nav>

        <Nav vertical>
          <h6 className="mt-4">react-ocean-forms-react-intl</h6>
          <NavItem>
            <NavLink tag={Link} to="/components/intl/intl-form/">IntlForm</NavLink>
          </NavItem>
        </Nav>
      </Col>
    </Row>
  );
}

export default Components;
