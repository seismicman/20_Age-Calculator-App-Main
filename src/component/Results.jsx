import React from "react";
import { calculate_results } from "./helpers/calculate_results";

const Results = ({ form, form_errors }) => {
  let obj_results = {
    years: "--",
    months: "--",
    days: "--",
  };
  obj_results =
    Object.keys(form_errors).length === 0
      ? calculate_results(form)
      : obj_results;
  return (
    <article className="results">
      <h2>
        <span>{obj_results.years}</span> years
      </h2>
      <h2>
        <span>{obj_results.months}</span> months
      </h2>
      <h2>
        <span>{obj_results.days}</span> days
      </h2>
    </article>
  );
};

export default Results;
