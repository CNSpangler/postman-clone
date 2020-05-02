import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ url, method, body }) => {
  <>
    <p>{url}</p>
    <p>{method}</p>
    <p>{body}</p>
  </>;
};

HistoryItem.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.any
};

export default HistoryItem;
