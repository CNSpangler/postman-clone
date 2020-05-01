// useState for input field
// useState for radio group
// useEffect for button click
  // sends url from input field to api call function
  // tells link which HTTP method to use
  // sets results in state
  // results pane reads state and automatically updates

import React, { useState, useEffect } from 'react';
import Form from '../../components/Form/Form.jsx';

const InteractionPane = () => {
  const [url, setUrl] = useState();

  useEffect(() => {
    
  }, []);

  return (
    <>
      <Form />
    </>
  );
};

export default InteractionPane;
