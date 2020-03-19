import React, { useEffect } from "react";
import { withFormik, Form, Field } from "formik";

const Information = ({ data, changeDate, status }) => {
  const { copyright, date, explanation, title, url } = data;

  useEffect(() => {
    status && changeDate(status);
  }, [status, changeDate]);
  return (
    <div className="container">
      <Form>
        <Field component="select" name="dates">
          <option value="2000-02-14">2000-02-14</option>
          <option value="2010-02-24">2010-02-24</option>
          <option value="2006-11-01">2006-11-01</option>
        </Field>
        <button type="submit">Submit</button>
      </Form>
      <div className="card-container">
        <h1>{title}</h1>
        <img src={url} alt={title} />
        <p className="desc">{explanation}</p>
        <span className="date">{date}</span>
        <span className="copyright">{copyright}</span>
      </div>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    dates: ""
  }),
  handleSubmit: (values, { resetForm, setStatus }) => {
    setStatus(values);
    resetForm();
  }
})(Information);
