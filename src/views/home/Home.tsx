import * as  React from 'react';

// tslint:disable-next-line:import-name
import PrismCode from 'react-prism';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';

// tslint:disable-next-line:no-var-requires
const gettingStartedExample = require('!!raw-loader!./examples/GettingStarted.js');

export const Home = (): JSX.Element => {
  return (
    <div className="page">
      <Jumbotron>
        <h1 className="display-4">react-ocean-forms</h1>
        <p className="lead">Flexible and lightweight framework for rendering and validating forms with React.</p>
        <hr />
        <p>
          <a href="https://www.npmjs.com/package/react-ocean-forms">
            <img src="https://img.shields.io/npm/v/react-ocean-forms.svg" alt="Npm version" />
          </a>
          {' '}
          <a href="https://github.com/environment-agency-austria/react-ocean-forms/blob/master/LICENSE">
            <img src="https://img.shields.io/github/license/environment-agency-austria/react-ocean-forms.svg" alt="License" />
          </a>
        </p>
      </Jumbotron>

      <h2>Installation</h2>

      <p>with npm:</p>
      <PrismCode className="lang-bash" component="pre">
        npm install --save-dev react-ocean-forms
      </PrismCode>

      <p>or with yarn:</p>
      <PrismCode className="lang-bash" component="pre">
        yarn add --dev react-ocean-forms
      </PrismCode>

      <h4 className="mt-4">Optional packages</h4>
      <p>
        The <a href="https://github.com/environment-agency-austria/react-ocean-forms">react-ocean-forms</a> package
        is the core package. While you can use it on it's own, we highly recommend adding
        the <a href="https://github.com/environment-agency-austria/react-ocean-forms-bootstrap">react-ocean-forms-bootstrap</a> package
        as well. It offers you easy bootstrap (reactstrap) integration.
      </p>
      <p>
        If you're using react-intl in your project, add
        the <a href="https://github.com/environment-agency-austria/react-ocean-forms-react-intl">react-ocean-forms-react-intl</a> package
        for react-intl support.
      </p>

      <h2 className="mt-4">Getting started</h2>
      <p>
        Assuming that you already have an up and running React app, otherwise please follow
        the <a href="https://github.com/facebook/create-react-app#creating-an-app">create-react-app</a> guideline.
      </p>
      <p>
        After adding the react-ocean-forms package(s) to your project, you can simply import the components you need.
      </p>
      <PrismCode className="lang-jsx" component="pre">{gettingStartedExample}</PrismCode>
      <p>For further documentation head to the <Link to="/components">components</Link> section.</p>
    </div>
  );
};
