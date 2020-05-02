import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

const HistoryItem = ({ item }) => {
  <ReactJson src={item} />;
};

HistoryItem.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.any
};

export default HistoryItem;
