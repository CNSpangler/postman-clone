import React from 'react';

const Form = () => (
  <form>
    <input type="text" id="URL" placeholder="URL" />
    <label htmlFor="GET">GET</label>
    <input type="radio" name="HTTP" id="GET" value="GET" />
    <label htmlFor="POST">POST</label>
    <input type="radio" name="HTTP" id="POST" value="POST" />
    <label htmlFor="GET">PUT</label>
    <input type="radio" name="HTTP" id="PUT" value="PUT" /> 
    <label htmlFor="GET">PATCH</label>
    <input type="radio" name="HTTP" id="PATCH" value="PATCH" />
    <label htmlFor="GET">DELETE</label>
    <input type="radio" name="HTTP" id="DELETE" value="DELETE" />
    <input type="textarea" name="body" placeholder="Raw JSON Body" />
    <button>Go!</button>
  </form>
);

export default Form;
