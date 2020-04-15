import React, { Fragment, useEffect } from 'react';

// bring in the main materialize
import 'materialize-css/dist/css/materialize.min.css';

// Bring in the javascript for modals
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';

const App = () => {
  useEffect(() => {
    //Initializes Materialize javascript
    M.AutoInit();
  });
  return (
    <Fragment className='App'>
      <h3>This is our app running</h3>
    </Fragment>
  );
};

export default App;
