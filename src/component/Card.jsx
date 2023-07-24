import { React, useState } from "react";
import Inputs from "./Inputs";
import Results from "./Results";

import { validate_date } from "./helpers/validate_date";
import { useform } from "./hooks/useform";

const initial_form = {
  day: "",
  month: "",
  year: "",
};

const Card = () => {

  const { form, form_errors, handleChange, handleBlur, handleSubmit } =
    useform(initial_form);
  return (
    <section className="master">
      <Inputs
        form={form}
        form_errors={form_errors}
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleSubmit={handleSubmit}
      />
      <Results form={form} form_errors={form_errors} />
    </section>
  );
};

export default Card;
