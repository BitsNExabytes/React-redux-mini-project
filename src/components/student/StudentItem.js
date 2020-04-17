import React from 'react';
import PropTypes from 'prop-types';

const StudentItem = ({ student }) => {
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

StudentItem.propType = {
  student: PropTypes.object.isRequired,
};
export default StudentItem;
