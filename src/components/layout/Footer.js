import React from 'react';

const Footer = () => {
  return (
    <footer class='page-footer black'>
      <div class='container'>
        <div class='row'>
          <div class='col l6 s12'>
            <h5 class='white-text'>Footer Content</h5>
            <p class='grey-text text-lighten-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A quasi
              eligendi possimus enim harum nihil deserunt debitis ipsum beatae
              quisquam.
            </p>
          </div>
          <div class='col l4 offset-l2 s12'>
            <h5 class='white-text'>Links</h5>
            <ul>
              <li>
                <a class='grey-text text-lighten-3' href='#!'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a class='grey-text text-lighten-3' href='#!'>
                  Terms of Use
                </a>
              </li>
              <li>
                <a class='grey-text text-lighten-3' href='#!'>
                  Help
                </a>
              </li>
              <li>
                <a class='grey-text text-lighten-3' href='#!'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class='footer-copyright'>
        <div class='container'>© 2020 Copyright , All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
