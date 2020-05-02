import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/prop-types */
const RadioGroup = ({ name, onChange, children }) => {
  const radioButtonsWithNameAndOnChange = React.Children.map(children, child => {
    return React.cloneElement(child, {
      name,
      onChange
    });
  });

  return (
    <>
      {radioButtonsWithNameAndOnChange}
    </>
  );
};

const RadioButton = ({ name, value, onChange }) => (
  <>
    <input id={value} type="radio" name={name} value={value} onChange={onChange} />
    <label htmlFor={value}>{value}</label>
  </>
);

/* eslint-enable react/prop-types */
const Form = ({ url, onUrlChange, body, onBodyChange, onMethodChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" value={url} placeholder="URL" onChange={onUrlChange} />
    <RadioGroup name="method" onChange={onMethodChange}>
      <RadioButton value="POST" />
      <RadioButton value="GET" />
      <RadioButton value="PATCH" />
      <RadioButton value="PUT" />
      <RadioButton value="DELETE" />
    </RadioGroup>
    <input type="textarea" value={body} placeholder="Raw JSON Body" onChange={onBodyChange} />
    <button>Submit</button>
  </form>
);

Form.propTypes = {
  url: PropTypes.string.isRequired,
  onUrlChange: PropTypes.func.isRequired,
  body: PropTypes.any,
  onBodyChange: PropTypes.func.isRequired,
  onMethodChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Form;
