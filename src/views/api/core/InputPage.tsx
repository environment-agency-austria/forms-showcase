import * as React from 'react';

// tslint:disable-next-line:import-name
import PrismCode from 'react-prism';
import { Link } from 'react-router-dom';

import { ApiPage } from '../shared/ApiPage';
import { PropInfo } from '../shared/PropInfo';

import CustomInputJs from '!!raw-loader!./examples/CustomInput.js';
import CustomInputUsageJs from '!!raw-loader!./examples/CustomInputUsage.js';
import InputJs from '!!raw-loader!./examples/Input.js';

// tslint:disable-next-line:max-func-body-length
export const InputPage = (): JSX.Element => {
  return (
    <ApiPage
      title="Input"
      description="Defines a form line containing a label and an input. Additionally it will render
      validation messages. If the user adds the required validator then it
      will mark the field as required as well."
      codeExample={InputJs}
      parent="core"
    >
      <h2>Properties</h2>
      <PropInfo name="type" type="String" defaultValue="text">
        HTML5 input type of the input element.
      </PropInfo>

      <h2>Events</h2>
      <p>See <Link to="../field">Fields</Link> for event handling.</p>

      <h2>Writing your own Input Component</h2>
      <p>
        An Input Component is just a regular React Component that gets provided with special
        props by the <Link to="../field">Field</Link>. This makes it quite easy to write your own components,
        as most of the Form logic will be handled by the Field wrapper.
      </p>
      <p>
        Your component will be supplied with following form meta props, additionally to any
        custom props that you attach to the Field.
      </p>

      <PropInfo name="field" type="Object">
        <p>An object that is designed to be directly attached to the html input element.</p>
        <h6>Properties</h6>
        <dl className="row">
          <dt className="col-sm-3">id <span className="text-info font-weight-normal font-italic">(String)</span></dt>
          <dd className="col-sm-9">
            Unique id of the input element. The id is group-aware, meaning that it will
            be prefixed by the id of the containing group (if any).
          </dd>
          <dt className="col-sm-3">name <span className="text-info font-weight-normal font-italic">(String)</span></dt>
          <dd className="col-sm-9">
            Alias for id.
          </dd>
          <dt className="col-sm-3">value <span className="text-info font-weight-normal font-italic">(any)</span></dt>
          <dd className="col-sm-9">
            Current field value. Important: the <Link to="../field">Field</Link> will manage the value for you.
          </dd>
          <dt className="col-sm-3">disabled <span className="text-info font-weight-normal font-italic">(Boolean)</span></dt>
          <dd className="col-sm-9">
            True if the input should be disabled. Set by the form-wide disabled prop.
          </dd>
          <dt className="col-sm-3">onChange <span className="text-info font-weight-normal font-italic">(Function)</span></dt>
          <dd className="col-sm-9">
            Handler for the onChange event.
          </dd>
          <dt className="col-sm-3">onBlur <span className="text-info font-weight-normal font-italic">(Function)</span></dt>
          <dd className="col-sm-9">
            Handler for the onBlur event.
          </dd>
        </dl>
      </PropInfo>

      <PropInfo name="meta" type="Object">
        <p>Object containing various meta information about the field state.</p>
        <h6>Properties</h6>
        <dl className="row">
          <dt className="col-sm-3">valid <span className="text-info font-weight-normal font-italic">(Boolean)</span></dt>
          <dd className="col-sm-9">
            True if the input is valid. Is updated through the validators results.
          </dd>
          <dt className="col-sm-3">error <span className="text-info font-weight-normal font-italic">(Object)</span></dt>
          <dd className="col-sm-9">
            Contains the current error object if the field is invalid.
          </dd>
          <dt className="col-sm-3">isValidating <span className="text-info font-weight-normal font-italic">(Boolean)</span></dt>
          <dd className="col-sm-9">
            True if the input is currently validated by an asynchronous validator. Useful for displaying
            e.g. spinner to indicate that a background task is active.
          </dd>
          <dt className="col-sm-3">touched <span className="text-info font-weight-normal font-italic">(Boolean)</span></dt>
          <dd className="col-sm-9">
            True if the input has been touched since loading.
          </dd>
          <dt className="col-sm-3">plaintext <span className="text-info font-weight-normal font-italic">(Boolean)</span></dt>
          <dd className="col-sm-9">
            True if the <Link to="../form">Form</Link> is in plaintext mode. The input should be rendered in a way that
            is read-only (e.g. for a reusable check page with all the user input).
          </dd>
          <dt className="col-sm-3">stringFormatter <span className="text-info font-weight-normal font-italic">(Function)</span></dt>
          <dd className="col-sm-9">
            A function that should be used for displaying any text in the ui. Depending on the Form setup, it will
            either display the message as-is or will use any i18n method (if you use <mark>react-ocean-forms-react-intl</mark> for example).
          </dd>
        </dl>
      </PropInfo>

      <PropInfo name="label" type="String">
        The label prop of the <Link to="../field">Field</Link>.
      </PropInfo>

      <h5>Example custom input</h5>
      <p>This is an example implentation of a very simple input component.</p>
      <PrismCode className="lang-jsx" component="pre">{CustomInputJs}</PrismCode>
      <p>Usage of your custom input:</p>
      <PrismCode className="lang-jsx" component="pre">{CustomInputUsageJs}</PrismCode>
    </ApiPage>
  );
};
