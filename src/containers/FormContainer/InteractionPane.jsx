// useState for input field
// useState for radio group
// useEffect for button click
//    sends url from input field to api call function
//    tells link which HTTP method to use
//    sets results in state
// results pane reads state and automatically updates

import React, { useState } from 'react';
import Form from '../../components/Form/Form.jsx';
import Results from '../../components/Results/Results.jsx';
import { makeRequest } from '../../services/fetch.js';

const InteractionPane = () => {
  const [url, setUrl] = useState('');
  const [body, setBody] = useState(null);
  const [method, setMethod] = useState('GET');
  const [results, setResults] = useState('');

  const handleUrlChange = ({ target }) => {
    setUrl(target.value);
  };

  const handleMethodChange = ({ target }) => {
    setMethod(target.value);
  };

  const handleBodyChange = ({ target }) => {
    setBody(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    makeRequest(url, method)
      .then(response => setResults(response));
  };
  
  return (
    <>
      <Form url={url} method={method} body={body} onUrlChange={handleUrlChange} onMethodChange={handleMethodChange} onBodyChange={handleBodyChange} onSubmit={handleSubmit}/>
      {results && <Results results={results} />}
    </>
  );
};

export default InteractionPane;
