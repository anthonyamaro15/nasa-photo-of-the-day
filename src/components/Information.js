import React from "react";

const Information = ({ data }) => {
  const { copyright, date, explanation, title, url } = data;

  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="card-container">
        <img src={url} />
        <p className="desc">{explanation}</p>
        <span className="date">{date}</span>
        <span className="copyright">{copyright}</span>
      </div>
    </div>
  );
};

export default Information;
