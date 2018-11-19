import React from 'react';
import { Form, Input } from 'react-ocean-forms';

class GettingStarted extends React.Component {
  handleSubmit(values) {
    console.log('form submitted with', values);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input name="myInput" label="Example input" />
        <button type="submit">Submit</button>
      </Form>
    );
  }
}

export default GettingStarted;
