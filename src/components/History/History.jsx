import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from '../HistoryItem/HistoryItem.jsx';

const History = ({ history }) => {
  const historyItems = history.map(item => (
    <li key={item.title}>
      <HistoryItem {...item} />
    </li>
  ));

  return (
    <ul>
      {historyItems}
    </ul>
  );
};

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    method: PropTypes.string,
    body: PropTypes.any
  }))
};

export default History;
