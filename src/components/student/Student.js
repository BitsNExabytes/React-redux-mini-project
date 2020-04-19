import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getStudents } from '../../actions/studentActions';
import { getRandomStudent } from '../../actions/studentActions';
import StudentItem from './StudentItem';
import PropTypes from 'prop-types';

const Student = ({
  student: { students, loading },
  getStudents,
  getRandomStudent,
}) => {
  useEffect(() => {
    getStudents();
    getRandomStudent();
    // eslint-disable-next-line
  }, []);

  if (loading || students === null) {
    return <p>Loading.....</p>;
  }

  return (
    <div style={userStyle} className='center'>
      {!loading && students.length === 0 ? (
        <p className='center'>There are no students to show</p>
      ) : (
        students.map((student) => (
          <StudentItem student={student} key={student.id} />
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

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr)',
  gridGap: '1rem',
};

export default connect(mapStateToProps, { getStudents, getRandomStudent })(
  Student
);
