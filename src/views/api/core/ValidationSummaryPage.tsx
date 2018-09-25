import * as React from 'react';

import ApiPage from '../shared/ApiPage';
import PropInfo from '../shared/PropInfo';

const introExample = require('!!raw-loader!./examples/ValidationSummary.js'); // eslint-disable-line

export const ValidationSummaryPage = (): JSX.Element => {
  return (
    <ApiPage
      title="ValidationSummary"
      description="Displays a clickable list of errors from the current form. When an error is clicked,
      the corresponding input field is focused."
      codeExample={introExample}
      parent="core"
    >
      <h2>Properties</h2>
      <PropInfo name="id" type="String" required>
        Id of this input. Will be used as the unique identifier of the div.<br />
        <strong>Must be unique form wide!</strong>
      </PropInfo>

      <PropInfo name="title" type="String">
        Message that will be used as the title, wrapped in a <mark>h4</mark>.
      </PropInfo>

      <PropInfo name="disableFocusOnSubmit" type="Boolean" defaultValue="false">
        If set to true the validation summary will stop automatically scrolling to itself
        when the user clicks on a submit button and the form is invalid.
      </PropInfo>

      <PropInfo name="renderFieldError" type="Function">
        <p>
          Optional function that can be used to customize the output of each error.
        </p>
        <h6>Arguments</h6>
        <dl className="row">
          <dt className="col-sm-3">id <span className="text-info font-weight-normal font-italic">(String)</span></dt>
          <dd className="col-sm-9">
            Unique id
          </dd>

          <dt className="col-sm-3">fieldName <span className="text-info font-weight-normal font-italic">(String)</span></dt>
          <dd className="col-sm-9">
            Name / label of the field
          </dd>

          <dt className="col-sm-3">errors <span className="text-info font-weight-normal font-italic">(Object)</span></dt>
          <dd className="col-sm-9">
            Object / Array of objects with the rendered error messages
          </dd>

          <dt className="col-sm-3">linkCallback <span className="text-info font-weight-normal font-italic">(Function)</span></dt>
          <dd className="col-sm-9">
            Function that should be called on click, will focus on the input element.
          </dd>
        </dl>
      </PropInfo>

      <PropInfo name="render" type="Function">
        <p>
          Optional function that can be used to customize the ValidationSummary rendering.
          Note: This function will only be called when there are errors to be displayed.
        </p>
        <h6>Arguments</h6>
        <dl className="row">
          <dt className="col-sm-3">children <span className="text-info font-weight-normal font-italic">(Object)</span></dt>
          <dd className="col-sm-9">
            Object containing the rendered ValidationSummary content.
          </dd>
        </dl>
      </PropInfo>

      <h2>Events</h2>
      <p>The <mark>ValidationSummary</mark> doesn't emit any events.</p>
    </ApiPage>
  );
};
