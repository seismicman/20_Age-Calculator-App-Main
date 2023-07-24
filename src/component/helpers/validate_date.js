export const validate_date = (form) => {
  let errors_fields = {};
  const re_noyear = /^[0-9]{0,2}$/;
  const re_year = /^[0-9]{0,4}$/;
  let february = 28;
  const current_year = new Date().getFullYear();
  let year = 0,
    month = 0,
    day = 0;

  if (!form.year.trim()) {
    errors_fields.year = "This field is required";
  } else if (!re_year.exec(form.year.trim())) {
    errors_fields.year = "Must be a valid year";
  } else if (parseInt(form.year, 10) > current_year) {
    errors_fields.year = "Must be in the past";
  } else {
    year = parseInt(form.year, 10);
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
      february = 29;
    }
  }

  if (!form.month.trim()) {
    errors_fields.month = "This field is required";
  } else if (
    !re_noyear.exec(form.month.trim()) ||
    parseInt(form.month, 10) > 12 ||
    parseInt(form.month, 10) <= 0
  ) {
    errors_fields.month = "Must be a valid month";
  } else {
    let maxDate = [0, 31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (
      parseInt(form.day, 10) > maxDate[parseInt(form.month, 10)] ||
      parseInt(form.day, 10) <= 0
    ) {
      errors_fields.day = "Must be a valid date";
    } else {
      month = parseInt(form.month, 10);
    }
  }

  if (!form.day.trim()) {
    errors_fields.day = "This field is required";
  } else if (!re_noyear.exec(form.day.trim()) || parseInt(form.day, 10) > 31) {
    errors_fields.day = "Must be a valid day";
  } else {
    day = parseInt(form.day, 10);
  }

  if (day > 0 && month > 0 && year > 0) {
    let current_date = new Date();
    let input_date = new Date(year, month - 1, day);
    current_date.setHours(0, 0, 0, 0);
    if (input_date.getTime() >= current_date.getTime()) {
      errors_fields.day = "Must be a date in the past";
    }
  }

  return errors_fields;
};
