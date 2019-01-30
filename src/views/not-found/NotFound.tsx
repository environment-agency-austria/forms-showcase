import React from 'react';

import { Link } from 'react-router-dom';

export const NotFound = (): JSX.Element => {
  return (
    <React.Fragment>
      <h1>404 - Not Found</h1>
      <p>The page you've requested could not be found.</p>
      <Link to="/">Go to homepage</Link>
    </React.Fragment>
  );
};

export const AsyncPage = NotFound;
