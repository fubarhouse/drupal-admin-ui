import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import api from './utils/api/api';

// Disable react-axe without an additional cli flag.
// See README.md for more information.
if (process.env.NODE_ENV !== 'production' && process.env.REACT_APP_AXE) {
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  const axe = require('react-axe');
  axe(React, ReactDOM);
}

api('admin_ui_routes').then(({ routes }) => {
  ReactDOM.render(
    <App serverRoutes={routes} />,
    document.getElementById('root'),
  );
});
registerServiceWorker();
