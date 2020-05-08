import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styles from '../App/App.css';

const Results = ({ results }) => (
  <div className={styles.Results}>
    {results ? <ReactJson src={results} /> : <div>Please make a request above</div>}
  </div>
);

Results.propTypes = {
  results: PropTypes.any
};

export default Results;
