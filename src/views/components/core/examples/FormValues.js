import React from 'react';
import { Form, Field, Input } from 'react-ocean-forms';

class Example extends React.Component {
  state = {
    // Typically you'd load the values from your backend
    values: {
      myInput: 'demo value',
    },
  };

  // Submit callback, here you'd make your api calls
  handleSubmit = (values) => {
    const { logMessage } = this.props;
    logMessage('onSubmit, values: ' + JSON.stringify(values));
  };

  randomizeValues = () => {
    this.setState({
      values: {
        myInput: `demo ${(Math.floor(Math.random() * 100))}`,
      },
    });
  }

  render() {
    const { values } = this.state;

    return (
      <Form
        className="demo"
        onSubmit={this.handleSubmit}
        values={values}
      >
        <Field name="myInput" label="Example input" component={Input} />

        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
        <button
          type="button"
          onClick={this.randomizeValues}
          className="ml-1"
        >
          Update values
        </button>
      </Form>
    );
  }
}

export default Example;
