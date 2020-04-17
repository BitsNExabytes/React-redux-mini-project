import React, { Fragment, useEffect } from 'react';

// bring in the main materialize
import 'materialize-css/dist/css/materialize.min.css';

// Bring in the javascript for modals
import M from 'materialize-css/dist/js/materialize.min.js';

//bring in provider
import { Provider } from 'react-redux';

// import student
import Student from './components/student/Student';

//bring in store
import store from './store';

//bring in navbar
import Navbar from './components/layout/Navbar';

import './App.css';

const App = () => {
  useEffect(() => {
    //Initializes Materialize javascript
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <>
        <Navbar />
        <div className='container'>
          <Student />
        </div>
      </>
    </Provider>
  );
};

export default App;
