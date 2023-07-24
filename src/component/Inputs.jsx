import React from "react";
import icon_arrow from "../assets/images/icon-arrow.svg";

const Inputs = ({
  form,
  form_errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <article className="inputs">
      <div className="date-container">
        <div className="day-container">
          <label
            htmlFor="day"
            className={`label-txt ${
              form_errors.day || form_errors.month || form_errors.year
                ? "label-txt-error"
                : ""
            }`}
          >
            DAY
          </label>
          <input
            type="text"
            className={`day ${
              form_errors.day || form_errors.month || form_errors.year
                ? "input-selected"
                : ""
            }`}
            name="day"
            id="day"
            placeholder="DD"
            value={form.day}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="text-error">{form_errors.day}</p>
        </div>
        <div className="month-container">
          <label
            htmlFor="month"
            className={`label-txt ${
              form_errors.day || form_errors.month || form_errors.year
                ? "label-txt-error"
                : ""
            }`}
          >
            MONTH
          </label>
          <input
            type="text"
            className={`month ${
              form_errors.day || form_errors.month || form_errors.year
                ? "input-selected"
                : ""
            }`}
            name="month"
            id="month"
            placeholder="MM"
            value={form.month}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="text-error">{form_errors.month}</p>
        </div>
        <div className="year-container">
          <label
            htmlFor="year"
            className={`label-txt ${
              form_errors.day || form_errors.month || form_errors.year
                ? "label-txt-error"
                : ""
            }`}
          >
            YEAR
          </label>
          <input
            type="text"
            className={`year ${
              form_errors.day || form_errors.month || form_errors.year
                ? "input-selected"
                : ""
            }`}
            name="year"
            id="year"
            placeholder="YYYY"
            value={form.year}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="text-error">{form_errors.year}</p>
        </div>
      </div>
      <hr className="line" />
      <div className="arrow">
        <button className="btn" onClick={handleSubmit}>
          <img className="icon-arrow" src={icon_arrow} alt="icon-arrow.svg" />
        </button>
      </div>
    </article>
  );
};

export default Inputs;
