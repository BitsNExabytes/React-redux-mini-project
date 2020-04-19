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

import AddButton from './components/student/AddButton';

import AddStudentModal from './components/student/AddStudentModal';

//bring in footer
import Footer from './components/layout/Footer';

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
          <AddButton />
          <AddStudentModal />

          <Student />
        </div>
        <Footer />
      </>
    </Provider>
  );
};

export default App;
