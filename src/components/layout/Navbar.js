import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { searchStudents } from '../../actions/studentActions';
import PropTypes from 'prop-types';

const Navbar = ({ searchStudents }) => {
  const text = useRef('');
  const onChange = () => {
    searchStudents(text.current.value);
  };

  return (
    <div className='navbar-fixed' style={{ marginBottom: '50px' }}>
      <nav className='black'>
        <div class='nav-wrapper'>
          <form>
            <div class='input-field'>
              <input
                id='search'
                type='search'
                ref={text}
                required
                onChange={onChange}
              />
              <label class='label-icon' for='search'>
                <i class='material-icons'>search</i>
              </label>
              <i class='material-icons white-text'>people_outline</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  searchStudents: PropTypes.func.isRequired,
};

export default connect(null, { searchStudents })(Navbar);
