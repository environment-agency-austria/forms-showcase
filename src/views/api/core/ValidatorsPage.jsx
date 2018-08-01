import React from 'react';
import PrismCode from 'react-prism';
import { Link } from 'react-router-dom';

import ApiPage from '../shared/ApiPage';
import PropInfo from '../shared/PropInfo';

const introExample = require('!!raw-loader!./examples/Validators.js'); // eslint-disable-line
const paramsExample = require('!!raw-loader!./examples/ValidatorsWithParams.js'); // eslint-disable-line
const errorExample = require('!!raw-loader!./examples/ErrorObject.js'); // eslint-disable-line
const errorMessageExample = require('!!raw-loader!./examples/ErrorMessage.js'); // eslint-disable-line
const customValidatorExample = require('!!raw-loader!./examples/CustomValidator.js'); // eslint-disable-line
const customAsyncValidatorExample = require('!!raw-loader!./examples/CustomAsyncValidator.js'); // eslint-disable-line
const customFormValidatorExample = require('!!raw-loader!./examples/CustomFormValidator.js'); // eslint-disable-line

function FieldPage() {
  return (
    <ApiPage
      title="Validators"
      description="There are two types of validators, synchronous and asynchronous validators.
      Those can be attached to either a Form or a FormGroup and will get triggered automatically."
      codeExample={introExample}
      parent="core"
      hideComponentLink
    >
      <h2>Default validators</h2>
      <p>
        <mark>react-ocean-forms</mark> ships with the following validators. Those
        only support <Link to="../field">Fields</Link>, if you need <Link to="../field-group">FieldGroup</Link> validators,
        you have to implement your own validator.
      </p>

      <PropInfo name="validators.required" type="synchronous validator">
        Checks if any value is present.
      </PropInfo>

      <PropInfo name="validators.alphaNumeric" type="synchronous validator">
        Checks if the input is alpha numeric.
      </PropInfo>

      <PropInfo name="validators.minLength" type="synchronous validator with parameters">
        Checks if the value has a given minimum length.
      </PropInfo>

      <PropInfo name="validators.maxLength" type="synchronous validator with parameters">
        Checks if the value has a given maximum length.
      </PropInfo>

      <h2>Validation behaviour</h2>
      <p>
        Validators can be triggered by three events: <mark>change</mark> or <mark>blur</mark> of
        a <Link to="../field">Field</Link>, or <mark>submit</mark> of the <Link to="../form">Form</Link>.
        The validation will be performed as following:
      </p>

      <PropInfo name="Field.onChange">
        <ol>
          <li>
            Invoke the <mark>synchronous validators</mark> of a <Link to="../field">Field</Link>. The validators will
            be called one by one, regarding of their position in the validators Array. If a validator
            returns an error, the subsequential validators will <strong>not</strong> be called.
          </li>
          <li>
            <p>
              If the prop <mark>asyncValidateOnChange</mark> is set to true (either on the Field or the Form),
              then the Form will wait the time defined in <mark>asyncValidationWait</mark> to see if the
              user will change the input again.
            </p>
            <p>
              If the value didn't change and the synchronous validators are all valid, then the
              <mark>asynchronous validators</mark> will be called. All the validators are called at the same time
              and the <Link to="../field">Field</Link> will wait for the result of each of them.
            </p>
          </li>
          <li>
            If any of the validators return an error, the field is marked as invalid.
          </li>
        </ol>
      </PropInfo>

      <PropInfo name="Field.onBlur">
        <ol>
          <li>
            If the field value didn't change since the last validation and the prop <mark>asyncValidateOnChange</mark>
            is true, then the validation won't be called again. This is to prevent unnecessary async validations.
            Otherwise:
          </li>
          <li>
            Invoke the <mark>synchronous validators</mark> of a <Link to="../field">Field</Link>. The validators will
            be called one by one, regarding of their position in the validators Array. If a validator
            returns an error, the subsequential validators will <strong>not</strong> be called.
          </li>
          <li>
            The <mark>asynchronous validators</mark> will be called. All the validators are called at the same time
            and the <Link to="../field">Field</Link> will wait for the result of each of them.
          </li>
          <li>
            If any of the validators return an error, the field is marked as invalid.
          </li>
        </ol>
      </PropInfo>

      <PropInfo name="Form.onSubmit">
        <ol>
          <li>
            The form will iterate through each field and invoke the validation. The fields will immediately call both
            their sync and async validators.
          </li>
          <li>
            If all fields are valid, the <mark>Form.onValidate</mark> function will be called. This is a form-wide synchronous
            validator. If the form-wide validation returns an error, the submit will be cancelled.
          </li>
          <li>
            All the errors are displayed and the viewport will be scrolled to the <mark>ValidationSummary</mark>.
          </li>
        </ol>
      </PropInfo>

      <PropInfo name="FieldGroups">
        <Link to="../field-group">FieldGroups</Link> behave in the same way as <Link to="../field">Fields</Link>.
        The Fields of the Group will pass their onChange and onBlur events to the parent group, thus triggering
        the group-wide validation. The FieldGroup will validate no matter what the validation results of the Fields are.
      </PropInfo>

      <h2>Validators with parameters</h2>
      <p>
        If a validator needs additional parameters (like <mark>minLength</mark> and <mark>maxLength</mark> do), you
        can use the helper function <mark>validators.withParam</mark>. Example usage to pass the parameter 5 to the minLength validator:
      </p>
      <PrismCode className="lang-jsx" component="pre">{paramsExample}</PrismCode>

      <h2>Writing your own validator</h2>
      <p>You can very easily add your own validation logic by writing custom validation functions.</p>

      <PropInfo name="Custom synchronous validator">
        <p>
          The validator function will receive the current field value and the form context, and must
          return undefined if the value is valid or an error with the error message.
        </p>

        <h6>Arguments</h6>
        <dl className="row">
          <dt className="col-sm-3">value <span className="text-info font-weight-normal font-italic">(any)</span></dt>
          <dd className="col-sm-9">
            Contains the current field value.
          </dd>
          <dt className="col-sm-3">context <span className="text-info font-weight-normal font-italic">(Object)</span></dt>
          <dd className="col-sm-9">
            Contains the current form context that can be used for advanced validation. See <Link to="../form">Form</Link> for
            further information about the form context.
          </dd>
        </dl>

        <h6>Expected return value</h6>
        <p>The validator must return one of the following values:</p>
        <dl className="row">
          <dt className="col-sm-3"><span className="text-info">undefined</span></dt>
          <dd className="col-sm-9">
            The field is valid.
          </dd>
          <dt className="col-sm-3"><span className="text-info">String</span></dt>
          <dd className="col-sm-9">
            The field is invalid. The string should contain either a message id, or a raw
            error message if you don't need i18n features.
          </dd>
          <dt className="col-sm-3"><span className="text-info">Object</span></dt>
          <dd className="col-sm-9">
            The field is invalid. An error object can be used instead of a String to be able
            to use message templates. This is useful if you use i18n and message-ids. The
            error object must have the following shape:
            <PrismCode className="lang-jsx" component="pre">{errorExample}</PrismCode>
            This allows you to write your error message as following:
            <PrismCode className="lang-jsx" component="pre">{errorMessageExample}</PrismCode>
          </dd>
        </dl>

        <h6>Simple example validator</h6>
        <p>Example implementation of an validator that checks if the input is the value 'OK'.</p>
        <PrismCode className="lang-jsx" component="pre">{customValidatorExample}</PrismCode>
      </PropInfo>

      <PropInfo name="Custom asynchronous validator">
        <p>
          The validator function will receive the current field value and the form context, and must
          return a Promise. The promise must then resolve to undefined if the value is valid, otherwise
          an error with the error message. The parameters and expected return (resolved) values are
          the same as for <mark>Custom synchronous validators</mark>.
        </p>

        <h6>Simple example validator</h6>
        <p>Example implementation of an asynchronous validator that checks the value against an api.</p>
        <PrismCode className="lang-jsx" component="pre">{customAsyncValidatorExample}</PrismCode>
      </PropInfo>

      <PropInfo name="Custom form-wide validator">
        <p>
          The form wide validator is attached to the <mark>Form.onSubmit</mark> and is triggered when the
          form is submitted and all the Fields are valid. While form-wide validation is supported, it should
          be avoided. Try to attach your validation to Fields or FieldGroups if possible.
        </p>

        <h6>Arguments</h6>
        <dl className="row">
          <dt className="col-sm-3">values <span className="text-info font-weight-normal font-italic">(Object)</span></dt>
          <dd className="col-sm-9">
            Contains all the field values of the form.
          </dd>
        </dl>

        <h6>Expected return value</h6>
        <p>The validator must return one of the following values:</p>
        <dl className="row">
          <dt className="col-sm-3"><span className="text-info">null</span></dt>
          <dd className="col-sm-9">
            The form is valid.
          </dd>
          <dt className="col-sm-3"><span className="text-info">Object</span></dt>
          <dd className="col-sm-9">
            The form is invalid. The object must contain the error messages / objects of each
            invalid field.
          </dd>
        </dl>

        <h6>Simple example validator</h6>
        <p>Example implementation of an validator that does a validation form-wide.</p>
        <PrismCode className="lang-jsx" component="pre">{customFormValidatorExample}</PrismCode>
      </PropInfo>
    </ApiPage>
  );
}

export default FieldPage;
