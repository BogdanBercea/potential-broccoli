import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import _ from 'lodash';

import FIELDS from "./formFields";
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancelReview, formValues, submitSurvey, history }) => {
  const formFields = _.map(FIELDS, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {formFields}
      <button
        className="yellow btn-flat darken-3 white-text"
        onClick={onCancelReview}
      >
        Back
      </button>
      <button
        className="teal btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values,
  }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));