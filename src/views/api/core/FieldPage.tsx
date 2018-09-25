import * as React from 'react';

import { Link } from 'react-router-dom';

import ApiPage from '../shared/ApiPage';
import PropInfo from '../shared/PropInfo';

const introExample = require('!!raw-loader!./examples/Field.js'); // eslint-disable-line

// tslint:disable-next-line:max-func-body-length
export const FieldPage = (): JSX.Element => {
  return (
    <ApiPage
      title="Field"
      description="Defines a form field which will be managed by the Form."
      codeExample={introExample}
      parent="core"
    >
      <h2>Properties</h2>
      <PropInfo name="name" type="String" required>
        Name of this input. Will be used as the unique identifier of this value.<br />
        <strong>Must be unique inside its context (e.g. form wide or form group wide)!</strong>
      </PropInfo>

      <PropInfo name="label" type="String" required>
        Message id of the label that will be displayed along the input. If you don't want to use any i18n
        features you can pass a raw message instead.
      </PropInfo>

      <PropInfo name="component" type="React.Component" required>
        <p>
          The component that should be rendered as input.
        </p>
        <p>
          react-ocean-forms ships with an example html input implementation.
          For a pre-made bootstrap option take a look at <mark>react-ocean-forms-bootstrap</mark>.
        </p>
      </PropInfo>

      <PropInfo name="validators" type="Array[Function]">
        <p>
          Contains an array of functions that will validate this input. Those functions are called whenever the value changes
          (on keypress, ...). They are called in order and whenever one fails the other ones are not called. The validator
          function must return either undefined or a string containing the message id of the validation error text.
        </p>
        <p>
          react-ocean-forms ships with some sample validators. See <Link to="../validators">Validators</Link> for further information.
        </p>
      </PropInfo>

      <PropInfo name="asyncValidators" type="Array[Function]">
        Contains an array of functions that must return a Promise. Those functions are called by default onBlur,
        however this behaviour can be changed by setting asyncValidateOnChange on the Form. The Form will call all
        async validators of a Field at the same time and will wait for the result of every one of them. If one of
        them returns a string the field will be marked as invalid. Per default the form will wait for 400ms before
        triggering any validation. This is put in place so the validation won't get triggered on every keystroke of
        the user. The async validators will be called 400ms after the last value change.
      </PropInfo>

      <PropInfo name="asyncValidateOnChange" type="Boolean" defaultValue="form default">
        If set to true the form will trigger asynchronous validation on this field whenever it changes (e.g. on key press).
        Default behaviour is that the fields will only async validate when they loose focus.
      </PropInfo>

      <PropInfo name="asyncValidationWait" type="Number" defaultValue="form default">
        Configures the wait time before the async validators will be called. Per default the form will call the async validators
        only 400ms after the last value change.
      </PropInfo>

      <PropInfo name="defaultValue" type="Object">
        Overwrites the Form default values for this field. This value will be used during form initialization.
      </PropInfo>

      <PropInfo name="value" type="Object">
        Overwrites the Form value for this field. Changing this property will update the Field value,
        overwriting its default value but also any value the user put in.
      </PropInfo>

      <PropInfo name="Specialized properties">
        <p>
          Depending on the input component that is used with the Field, the Field will accept a range of specialized properties
          to configure the behaviour of the component. Those properties are described at the according documentation of the input component.
        </p>
        <p className="font-weight-bold">
          The Field will pass all non-field properties directly through to the Input Component.
        </p>
      </PropInfo>

      <h2>Events</h2>
      <PropInfo name="onChange" type="Function">
        <p>Triggered on field value change.</p>
        <h6>Arguments</h6>
        <dl className="row">
          <dt className="col-sm-3">value <span className="text-info font-weight-normal font-italic">(any)</span></dt>
          <dd className="col-sm-9">
            Contains the current field value.
          </dd>
        </dl>
      </PropInfo>

      <PropInfo name="onBlur" type="Function">
        <p>Triggered on field blur.</p>
        <h6>Arguments</h6>
        <p>None.</p>
      </PropInfo>

      <h2>Lifecycle Hooks</h2>
      <PropInfo name="getDisplayValue" type="Function">
        <p>Called, when the field is loading its value from the forms default values. Must return the value to display.</p>
        <h6>Arguments</h6>
        <dl className="row">
          <dt className="col-sm-3">value <span className="text-info font-weight-normal font-italic">(any)</span></dt>
          <dd className="col-sm-9">
            Contains the current field value.
          </dd>
          <dt className="col-sm-3">meta <span className="text-info font-weight-normal font-italic">(Object)</span></dt>
          <dd className="col-sm-9">
            Contains the properties <mark>disabled</mark> and <mark>plaintext</mark>, representing
            the current <Link to="../form">Form</Link> setup.
          </dd>
        </dl>

        <h6>Expected return value</h6>
        <p><strong>Any</strong> - the function should return the value that should be displayed.</p>
      </PropInfo>

      <PropInfo name="getSubmitValue" type="Function">
        <p>Called, when the field is submitting its value to the form. Must return the value to submit.</p>
        <h6>Arguments</h6>
        <dl className="row">
          <dt className="col-sm-3">value <span className="text-info font-weight-normal font-italic">(any)</span></dt>
          <dd className="col-sm-9">
            Contains the current field value.
          </dd>
          <dt className="col-sm-3">meta <span className="text-info font-weight-normal font-italic">(Object)</span></dt>
          <dd className="col-sm-9">
            Contains the properties <mark>disabled</mark> and <mark>plaintext</mark>, representing
            the current <Link to="../form">Form</Link> setup.
          </dd>
        </dl>

        <h6>Expected return value</h6>
        <p><strong>Any</strong> - the function should return the value that should be submitted.</p>
      </PropInfo>

      <h2>Writing your own Input Component</h2>
      <p>Please refer to the <Link to="../input">Input</Link> API documentation for further information.</p>
    </ApiPage>
  );
};
