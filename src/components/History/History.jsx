import React from 'react';
import HistoryItem from '../HistoryItem/HistoryItem.jsx';
import PropTypes from 'prop-types';

const History = ({ history }) => {
  const historyItems = history.map(item => {
    { history && 
      <li key={item.userId}>
        <HistoryItem {...item} />
      </li>;
    }
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
