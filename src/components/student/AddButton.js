import React from 'react';

const AddButton = () => {
  return (
    <div className='fixed-action-btn'>
      {/* Link must point to the modal being launched */}
      <a
        href='#add-student-modal'
        className='btn-floating btn-large grey modal-trigger '
      >
        <i className='large material-icons'>add</i>
      </a>
    </div>
  );
};

export default AddButton;
