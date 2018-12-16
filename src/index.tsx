import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';
import { unregister } from './serviceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement,
);

unregister();
