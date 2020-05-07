import React, { useState } from 'react';
import Form from '../../components/Form/Form.jsx';
import Results from '../../components/Results/Results.jsx';
import History from '../../components/History/History.jsx';
import { makeRequest } from '../../services/fetch.js';

const InteractionPane = () => {
  // instantiate state
  const [url, setUrl] = useState('');
  const [body, setBody] = useState('');
  const [method, setMethod] = useState('GET');
  const [results, setResults] = useState('');
  const [history, setHistory] = useState([]);

  // handle state changes in form
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

    makeRequest(url, method, body)
      .then(response => setResults(response));

    // dependent state change
    setHistory(prevHistory => ([
      ...prevHistory,
      {
        url,
        method,
        body
      }
    ]));
  };
  
  return (
    <>
      <Form url={url} method={method} body={body} results={results} onUrlChange={handleUrlChange} onMethodChange={handleMethodChange} onBodyChange={handleBodyChange} onSubmit={handleSubmit}/>

      <Results results={results} />

      <History history={history} />
    </>
  );
};

export default InteractionPane;
