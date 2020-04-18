import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteStudent } from '../../actions/studentActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const StudentItem = ({ student, deleteStudent }) => {
  const removeStudent = () => {
    deleteStudent(student.id);
    M.toast({
      html: `Student ${student.firstName} ${student.lastName} was removed`,
    });
  };
  return (
    <div className='row'>
      <div className='col s12 m6'>
        <div
          className='card  ndigo lighten-5 darken-1'
          style={{ width: '300px' }}
        >
          <img
            className='responsive-img circle'
            src={student.image}
            style={{ width: '100px', marginTop: '1.5rem' }}
          />
          <div className='card-content grey-text text-darken-2"'>
            <span className='card-title'>
              {student.firstName} {student.lastName}
            </span>

            <ul className='collection with-header'>
              <li className='collection-header'>Major: {student.major}</li>
              <li className='collection-item'>GPA: {student.gpa}</li>
              <li className='collection-item'>
                Enrolled: {student.DateInMajor}
              </li>
              <li className='collection-item'>
                <a href='#!' onClick={removeStudent}>
                  <i className='material-icons grey-text'>delete</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

StudentItem.propType = {
  student: PropTypes.object.isRequired,
  deleteStudent: PropTypes.func.isRequired,
};
export default connect(null, { deleteStudent })(StudentItem);
