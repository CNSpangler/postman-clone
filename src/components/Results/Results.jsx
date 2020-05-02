import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

const Results = ({ results }) => (
  <>
    <ReactJson src={results} />
  </>
);

Results.propTypes = {
  results: PropTypes.any
};

export default Results;
