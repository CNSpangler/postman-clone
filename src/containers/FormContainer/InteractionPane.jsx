// useState for input field
// useState for radio group
// useEffect for button click
//    sends url from input field to api call function
//    tells link which HTTP method to use
//    sets results in state
// results pane reads state and automatically updates

import React, { useState } from 'react';
import Form from '../../components/Form/Form.jsx';

const InteractionPane = () => {
  const [url, setUrl] = useState();
  const [body, setBody] = useState();
  const [method, setMethod] = useState();
  const [response, setResponse] = useState();

  handleUrlChange = ({ target }) => {
    setUrl(target.value);
  };

  handleMethodChange = ({ target }) => {
    setMethod(target.value);
  };

  handleBodyChange = ({ target }) => {
    setBody(target.value);
  };

  handleSubmit = () => {
    makeRequest(url, method, body)
      .then(response => setResponse(response));
  };
  
  return (
    <>
      <Form url={url} method={method} body={body} onUrlChange={handleUrlChange} onMethodChange={handleMethodChange} onBodyChange={handleBodyChange} onSubmit={handleSubmit}/>
    </>
  );
};

export default InteractionPane;
