import React from 'react';
import { Form, Input } from 'react-ocean-forms';

class Example extends React.Component {
  state = {
    defaultValues: {
      myInput: 'default value',
    },
  };

  // Submit callback, here you'd make your api calls
  handleSubmit = (values) => {
    const { logMessage } = this.props;
    logMessage('onSubmit, values: ' + JSON.stringify(values));
  };

  randomizeDefaultValues = () => {
    this.setState({
      defaultValues: {
        myInput: `default ${(Math.floor(Math.random() * 100))}`,
      },
    });
  }

  render() {
    const { defaultValues } = this.state;

    return (
      <Form
        className="demo"
        onSubmit={this.handleSubmit}
        defaultValues={defaultValues}
      >
        <Input name="myInput" label="Example input" />

        <p className="mt-4">
          Current default value: {defaultValues.myInput}
        </p>

        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
        <button
          type="button"
          onClick={this.randomizeDefaultValues}
          className="ml-1"
        >
          Update default values
        </button>
      </Form>
    );
  }
}

export default Example;
