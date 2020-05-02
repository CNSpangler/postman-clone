import React from 'react';
import HistoryItem from '../HistoryItem/HistoryItem.jsx';
import PropTypes from 'prop-types';

const History = ({ history = [{ url: 'test', method: 'GET', body: 'test' }, { url: 'test', method: 'GET', body: 'test' }] }) => {
  const historyItems = history.map(item => {
    <li key={item.userId}>
      <HistoryItem {...item} />
    </li>;
  });

  return (
    <ul>
      {historyItems}
    </ul>
  );
};

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    body: PropTypes.any
  }))
};

export default History;
