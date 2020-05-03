import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

const HistoryItem = ({ item }) => {
  return (
    <>
      <ReactJson src={item} />
      <h1>HISTORY ITEM</h1>
    </>
  );
};

HistoryItem.propTypes = {
  url: PropTypes.string,
  method: PropTypes.string,
  body: PropTypes.any
};

export default HistoryItem;
