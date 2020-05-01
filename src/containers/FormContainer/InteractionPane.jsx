// useState for input field
// useState for radio group
// useEffect for button click
//    sends url from input field to api call function
//    tells link which HTTP method to use
//    sets results in state
// results pane reads state and automatically updates

import React, { Component } from 'react';
import Form from '../../components/Form/Form.jsx';

export default class InteractionPane extends Component {
  state = {
    url: '',
    method: 'POST',
    body: ''
  }

  handleUrlChange = () => {};
  // handleMethodChange = () => {};
  // handleBodyChange = () => {};

  // handleSubmit = () => {
  //   makeRequest(this.state.url, this.state.method, this.state.body)
  //     .then(response => set response in state)
  // }
  
  render() {
    const { url, method, body } = this.state;

    return (
      <>
        <Form url={url} method={method} body={body} />
      </>
    );
  }
}
