import * as React from 'react';

import { Link } from 'react-router-dom';

import ApiPage from '../shared/ApiPage';
import PropInfo from '../shared/PropInfo';

const introExample = require('!!raw-loader!./examples/FieldGroup.js'); // eslint-disable-line

export const FieldGroupPage = (): JSX.Element => {
  return (
    <ApiPage
      title="FieldGroup"
      description="Defines a collection of fields. It will combine its values to a sub-object and provides the possibility
      to attach validators to the group."
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

      <PropInfo name="render" type="Function" required>
        <p>Gets called to render its children (see render prop pattern).</p>
        <h6>Arguments</h6>
        <dl className="row">
          <dt className="col-sm-3">groupInfo <span className="text-info font-weight-normal font-italic">(Object)</span></dt>
          <dd className="col-sm-9">
            Contains the group state consisting of <mark>fullName</mark>, <mark>isValidating</mark>,
            <mark>valid</mark>, <mark>error</mark> which can be used to display those informations.
          </dd>
        </dl>
      </PropInfo>

      <PropInfo name="validators" type="Array[Function]">
        <p>
          Contains an array of functions that will validate this input. Those functions are called whenever the value changes
          (on keypress, ...). They are called in order and whenever one fails the other ones are not called. The validator
          function must return either undefined or a string containing the message id of the validation error text.
        </p>
        <p>
          In case of a validator attached to a group, the validator will receive an object as the value parameter. This object
          will contain the values of the <Link to="../field">Fields</Link> inside the group.
        </p>
        <p>
          react-ocean-forms ships with some sample validators. See <Link to="../validators">Validators</Link> for further information.
        </p>
      </PropInfo>

      <PropInfo name="asyncValidators" type="Array[Function]">
        <p>
          Contains an array of functions that must return a Promise. Those functions are called by default onBlur,
          however this behaviour can be changed by setting asyncValidateOnChange on the Form. The Form will call all
          async validators of a Field at the same time and will wait for the result of every one of them. If one of
          them returns a string the field will be marked as invalid. Per default the form will wait for 400ms before
          triggering any validation. This is put in place so the validation won't get triggered on every keystroke of
          the user. The async validators will be called 400ms after the last value change.
        </p>
        <p>
          In case of a validator attached to a group, the validator will receive an object as the value parameter. This object
          will contain the values of the <Link to="../field">Fields</Link> inside the group.
        </p>
      </PropInfo>

      <PropInfo name="asyncValidateOnChange" type="Boolean" defaultValue="form default">
        If set to true the form will trigger asynchronous validation on this field whenever it changes (e.g. on key press).
        Default behaviour is that the fields will only async validate when they loose focus.
      </PropInfo>

      <PropInfo name="asyncValidationWait" type="Number" defaultValue="form default">
        Configures the wait time before the async validators will be called. Per default the form will call the async validators
        only 400ms after the last value change.
      </PropInfo>

      <PropInfo name="defaultValues" type="Object">
        Overwrites the Form default values for the child fields of this field group. Those values will be put into the according
        fields when the form initializes.
      </PropInfo>

      <PropInfo name="values" type="Object">
        Overwrites the Form values for the child fields of this field group. Changing this property will update all Field values,
        overwriting their default values but also any value the user put in.
      </PropInfo>

      <h2>Events</h2>
      <p>The <mark>FieldGroup</mark> doesn't emit any events.</p>
    </ApiPage>
  );
};
