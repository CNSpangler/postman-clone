import React from 'react';
import PropTypes from 'prop-types';
// import HistoryItem from '../HistoryItem/HistoryItem.jsx';
import ReactJson from 'react-json-view';
import styles from '../App/App.css';

const History = ({ history }) => {
  return (
    <div className={styles.History}>
      <h3>History:</h3>
      <ReactJson src={history} />
    </div>
  );
  // const historyItems = history.map(item => (
  //   <li key={item.id}>
  //     <HistoryItem {...item} />
  //   </li>
  // ));

  // return (
  //   <ul>
  //     <h1>HISTORY</h1>
  //     {historyItems}
  //   </ul>
  // );
};

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    method: PropTypes.string,
    body: PropTypes.any
  }))
};

export default History;
