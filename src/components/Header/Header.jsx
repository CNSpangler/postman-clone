import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App/App.css';

const Header = ({ title = 'Patchman' }) => (
  <div className={styles.Header}>
    <h1>{title}</h1>
  </div>
);

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
