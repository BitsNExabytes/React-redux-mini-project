import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { searchStudents } from '../../actions/studentActions';
import PropTypes from 'prop-types';

const Navbar = ({ searchStudents }) => {
  return (
    <nav className='grey' style={{ marginBottom: '50px' }}>
      <div class='nav-wrapper'>
        <form>
          <div class='input-field'>
            <input id='search' type='search' required />
            <label class='label-icon' for='search'>
              <i class='material-icons'>search</i>
            </label>
            <i class='material-icons white-text'>people_outline</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  searchStudents: PropTypes.func.isRequired,
};

export default connect(null, { searchStudents })(Navbar);
