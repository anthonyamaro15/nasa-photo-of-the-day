import React, { useEffect } from "react";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";

const Information = ({ data, changeDate, status }) => {
  const { copyright, date, explanation, title, url } = data;

  useEffect(() => {
    status && changeDate(status);
  }, [status, changeDate]);
  return (
    <div className="info-container">
      <FormCard>
        <Form>
          <Field component="select" name="dates" className="values">
            <option value="2000-02-14">2000-02-14</option>
            <option value="2010-02-24">2010-02-24</option>
            <option value="2006-11-01">2006-11-01</option>
          </Field>
          <Btn type="submit">Submit</Btn>
        </Form>
      </FormCard>
      <InfoCard className="card-container">
        <H1>{title}</H1>
        <ImgCard src={url} alt={title} />
        <CopyRight>
          <span className="copyright">{copyright}</span>
        </CopyRight>
        <Description className="desc">{explanation}</Description>
        <InfoDate className="date">{`date ${date}`}</InfoDate>
      </InfoCard>
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

const InfoCard = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 1.8rem;
`;

const ImgCard = styled.img`
  width: 100%;
`;

const Description = styled.p`
  padding: 1rem;
  font-size: 1.2rem;
`;

const CopyRight = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 0;
  font-size: 0.9rem;
`;

const InfoDate = styled.span`
  display: block;
  text-align: center;
  font-size: 0.7rem;
`;

const FormCard = styled.div`
  text-align: center;
`;

const Btn = styled.button`
  display: inline-block;
  border: none;
  outline: none;
  background: rgb(54, 105, 193);
  color: white;
  margin-left: 1rem;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0.2rem 1rem;
`;
