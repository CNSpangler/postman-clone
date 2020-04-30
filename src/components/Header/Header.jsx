import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title = 'Patchman'}) => (
  <>
    <h1>{title}</h1>
  </>
);

Header.proptypes = {
  title: PropTypes.string
};

export default Header;
