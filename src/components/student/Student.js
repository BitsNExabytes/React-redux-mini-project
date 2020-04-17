import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getStudents } from '../../actions/studentActions';
import StudentItem from './StudentItem';
import PropTypes from 'prop-types';

const Student = ({ student: { students, loading }, getStudents }) => {
  useEffect(() => {
    getStudents();
    // eslint-disable-next-line
  }, []);

  if (loading || students === null) {
    return <p>Loading.....</p>;
  }

  return (
    <div className='row'>
      {!loading && students.length === 0 ? (
        <p className='center'>There are no students to show</p>
      ) : (
        students.map((student) => (
          <div className='col s6 center-align red '>
            <StudentItem student={student} key={student.id} />
          </div>
        ))
      )}
    </div>
  );
};

Student.propTypes = {
  getStudents: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  student: state.student,
});

export default connect(mapStateToProps, { getStudents })(Student);
