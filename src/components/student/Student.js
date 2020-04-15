import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Student = ({ student, getStudents }) => {
  useEffect(() => {
    getStudents();
    // eslint-disable-next-line
  }, []);

  return <div></div>;
};

Student.propTypes = {
  getStudents: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  student: state.student,
});

export default connect(mapStateToProps, { getStudents })(Student);
