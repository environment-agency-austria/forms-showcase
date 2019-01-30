import React from 'react';
import * as ReactDOM from 'react-dom';

// tslint:disable-next-line:no-import-side-effect
import 'babel-polyfill';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-datetime/css/react-datetime.css';

import { App } from './App';
import { unregister } from './serviceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement,
);

unregister();
