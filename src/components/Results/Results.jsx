import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styles from '../App/App.css';

const Results = ({ results }) => (
  <div>
    <ReactJson src={results} className={styles.Results} />
  </div>
);

Results.propTypes = {
  results: PropTypes.any
};

export default Results;
