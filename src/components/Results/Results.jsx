import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ results }) => (
  <>
    <input type="textarea">{results}</input>
  </>
);

Results.proptypes = {
  results: PropTypes.object
};

export default Results;
