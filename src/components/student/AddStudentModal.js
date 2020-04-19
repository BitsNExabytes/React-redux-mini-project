import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addStudent } from '../../actions/studentActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddStudentModal = ({ addStudent }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [major, setMajor] = useState('');
  const [gpa, setGpa] = useState('');
  const [enrolled, setEnrolled] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '' || major === '' || gpa === '') {
      M.toast({ html: 'Complete Form' });
    } else {
      addStudent({
        firstName,
        lastName,
        gpa,
        major,
      });

      M.toast({ html: `${firstName + ' ' + lastName}  was added` });
      //clear fields
      setFirstName('');
      setLastName('');
    }
  };

  return (
    //This is the id used for the add log model in addBtn
    <div id='add-student-modal' style={modalStyle} className='modal'>
      {/* Must have a class of modal content */}
      <div className='modal-content'>
        <h4>Register Student</h4>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='major'
              value={major}
              onChange={(e) => setMajor(e.target.value)}
            />

            <label htmlFor='major' className='active'>
              Major
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='gpa'
              value={gpa}
              onChange={(e) => setGpa(e.target.value)}
            />

            <label htmlFor='enrolled' className='active'>
              GPA
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='enrolled'
              value={enrolled}
              onChange={(e) => setEnrolled(e.target.value)}
            />

            <label htmlFor='enrolled' className='active'>
              Enrolled
            </label>
          </div>
        </div>

        <div className='modal-footer'>
          <a
            href='#!'
            onClick={onSubmit}
            className='modal-close waves-effect waves-green btn'
          >
            Submit
            <i className='material-icons right'>send</i>
          </a>
        </div>
      </div>
    </div>
  );
};

AddStudentModal.propTypes = {
  addStudent: PropTypes.func.isRequired,
};

const modalStyle = {
  padding: '3rem',
};
export default connect(null, { addStudent })(AddStudentModal);
