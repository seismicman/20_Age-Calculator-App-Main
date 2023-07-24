import { useState } from "react";
import { validate_date } from "../helpers/validate_date";

export const useform = (initial_form) => {
  const [form, setForm] = useState(initial_form);
  const [form_errors, setForm_errors] = useState(initial_form);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = () => {
    setForm_errors(validate_date(form));
  };

  const handleSubmit = () => {
    if (Object.keys(form_errors).length === 0) {
      alert("Press OK to continue");
      setForm(initial_form);
      setForm_errors(initial_form);
    }
  };
  return { form, form_errors, handleChange, handleBlur, handleSubmit };
};
