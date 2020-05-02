import React, { useState } from 'react';
import Form from '../../components/Form/Form.jsx';
import Results from '../../components/Results/Results.jsx';
import History from '../../components/History.jsx';
import { makeRequest } from '../../services/fetch.js';

const InteractionPane = () => {
  const [url, setUrl] = useState('');
  const [body, setBody] = useState(null);
  const [method, setMethod] = useState('GET');
  const [results, setResults] = useState('');
  const [history, setHistory] = useState([]);

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
      <Form url={url} method={method} body={body} onUrlChange={handleUrlChange} onMethodChange={handleMethodChange} onBodyChange={handleBodyChange} onSubmit={handleSubmit}/>

      {results && <Results results={results} />}

      {history && <History history={history} />}
    </>
  );
};

export default InteractionPane;
