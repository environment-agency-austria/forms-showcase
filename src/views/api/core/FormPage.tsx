import * as React from 'react';

import PrismCode from 'react-prism';
import { Link } from 'react-router-dom';

import { ApiPage } from '../shared/ApiPage';
import { PropInfo } from '../shared/PropInfo';

import FormJs from '!!raw-loader!./examples/Form.js';
import ValuesExampleJs from '!!raw-loader!./examples/ValuesExample.js';

// tslint:disable-next-line:max-func-body-length
export const FormPage = (): JSX.Element => {
  return (
    <ApiPage
      title="Form"
      description="The form is the main component. It glues together all the
      Form logic through React's new Context api."
      codeExample={FormJs}
      parent="core"
    >
      <h2>Properties</h2>
      <PropInfo name="asyncValidationOnChange" type="Boolean" defaultValue="false">
        If set to true the form will trigger asynchronous validation on <Link to="../field">Fields</Link> whenever they
        change (e.g. on key press). Default behaviour is that the fields will only async validate
        when they loose focus. Can be overriden per field.
      </PropInfo>

      <PropInfo name="asyncValidationWait" type="Number" defaultValue="400">
        Configures the wait time before the async <Link to="../validators">validators</Link> will be called. Per default the form
        will call the async validators only 400ms after the last value change. Can be overriden per field.
      </PropInfo>

      <PropInfo name="className" type="String">
        Sets the className of the html form.
      </PropInfo>

      <PropInfo name="defaultValues" type="Object">
        <p>
          Contains the default values of the form. Those values will be put into the according fields
          when the form initializes. Example default values object:
        </p>
        <PrismCode className="lang-jsx" component="pre">{ValuesExampleJs}</PrismCode>
      </PropInfo>

      <PropInfo name="values" type="Object">
        <p>
          Contains the values of the form. Changing this property will update all Field values, overwriting
          their default values but also any value the user put in. Example values object:
        </p>
        <PrismCode className="lang-jsx" component="pre">{ValuesExampleJs}</PrismCode>
      </PropInfo>

      <PropInfo name="disabled" type="Boolean" defaultValue="false">
        If set to true the form will disable all <Link to="../field">Fields</Link> and <Link to="../form-button">FormButtons</Link>.
      </PropInfo>

      <PropInfo name="plaintext" type="Boolean" defaultValue="false">
        If set to true, all the fields will display only text instead of an input element.
        This is useful to re-use Fields in a check page.
      </PropInfo>

      <PropInfo name="formatString" type="Function">
        <p>
          If set every text output will be put through this function. Per default an internal
          implementation is used. The function receives the following parameters and it must
          return a string.
        </p>
        <h6>Arguments</h6>
        <dl className="row">
          <dt className="col-sm-3">id <span className="text-info font-weight-normal font-italic">(string)</span></dt>
          <dd className="col-sm-9">Id of the message.</dd>

          <dt className="col-sm-3">params <span className="text-info font-weight-normal font-italic">(?Object)</span></dt>
          <dd className="col-sm-9">
            Optional parameters that should be replaced in the message.
          </dd>
        </dl>

        <h6>Expected return value</h6>
        <p><strong>String</strong> - the function should return a string with the message.</p>
      </PropInfo>

      <h2>Events</h2>
      <PropInfo name="onSubmit" type="Function">
        <p>Triggered when the form has been validated successfully and is ready to be submitted.</p>
        <p>
          If the passed function is an async function / returns a promise, then the form context
          will stay in a busy state until the function resolves.
        </p>
        <h6>Arguments</h6>
        <dl className="row">
          <dt className="col-sm-3">values <span className="text-info font-weight-normal font-italic">(Object)</span></dt>
          <dd className="col-sm-9">
            Contains the form values. The name of the fields are used as property names for the values
            object. <Link to="../field-group">FieldGroups</Link> result in a nested object.
          </dd>

          <dt className="col-sm-3">submitArgs <span className="text-info font-weight-normal font-italic">(any)</span></dt>
          <dd className="col-sm-9">
            By default undefined. Can be set by <Link to="../form-button">FormButton</Link> or any other manual way of calling the
            submit method of the form context.
          </dd>
        </dl>
      </PropInfo>

      <PropInfo name="onValidate" type="Function">
        <p>
          Triggered after all field validations have been successfull. Provides the current values
          end expects an error object with the field names as properties and the errors inside
          those properties.
        </p>
        <h6>Arguments</h6>
        <dl className="row">
          <dt className="col-sm-3">values <span className="text-info font-weight-normal font-italic">(Object)</span></dt>
          <dd className="col-sm-9">
            Contains the form values. The name of the fields are used as property names for the values
            object. <Link to="../field-group">FieldGroups</Link> result in a nested object.
          </dd>
        </dl>

        <h6>Expected return value</h6>
        <p><strong>?Object</strong> - should return null if the values are valid, otherwise an error object.</p>
      </PropInfo>

      <PropInfo name="onReset" type="Function">
        <p>Triggered when the form has been resetted by the user.</p>
        <h6>Arguments</h6>
        <p>None.</p>
      </PropInfo>

      <PropInfo name="onFieldValueChanged" type="Function" deprecated>
        <p>Triggered when the value of a field changes.</p>
        <h6>Arguments</h6>
        <dl className="row">
        <dt className="col-sm-3">name <span className="text-info font-weight-normal font-italic">(string)</span></dt>
          <dd className="col-sm-9">Name of the changed field.</dd>

          <dt className="col-sm-3">value <span className="text-info font-weight-normal font-italic">(any)</span></dt>
          <dd className="col-sm-9">New field value.</dd>
        </dl>
      </PropInfo>
    </ApiPage>
  );
};
