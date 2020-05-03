import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App/App.css';

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
  <div className={styles.radioButton} >
    <input id={value} type="radio" name={name} value={value} onChange={onChange} />
    <label htmlFor={value}>{value}</label>
  </div>
);

/* eslint-enable react/prop-types */
const Form = ({ url, onUrlChange, body, onBodyChange, onMethodChange, onSubmit }) => (
  <div className={styles.Form}>
    <form onSubmit={onSubmit} className={styles.formGrid}>
      <input type="text" value={url} placeholder="URL" onChange={onUrlChange} className={styles.url}/>
      <RadioGroup name="method" onChange={onMethodChange} classname={styles.radioGroup}>
        <RadioButton value="POST" />
        <RadioButton value="GET" />
        <RadioButton value="PATCH" />
        <RadioButton value="PUT" />
        <RadioButton value="DELETE" />
      </RadioGroup>
      <input type="textarea" value={body} placeholder="Raw JSON Body" onChange={onBodyChange} className={styles.body} />
      <div className={styles.headers} />
      <button className={styles.button}>Submit</button>
    </form>
  </div>
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
