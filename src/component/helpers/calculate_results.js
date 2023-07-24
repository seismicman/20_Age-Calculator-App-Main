import Results from "../Results";

const final_day = (anyyear, anymonth) => {
  let year_aux = anymonth < 12 ? anyyear : anyyear + 1;
  let next_month = anymonth < 12 ? anymonth + 1 : 1;
  let aux_date = new Date(year_aux, next_month - 1, 1);
  aux_date.setDate(aux_date.getDate() - 1);
  let last_day = aux_date.getDate();
  return last_day;
};

export const calculate_results = (form) => {
  let results = {};
  let current_date = new Date();
  let current_year = current_date.getFullYear();
  let current_month = current_date.getMonth() + 1;
  let current_day = current_date.getDate();
  let input_year = parseInt(form.year, 10);
  let input_month = parseInt(form.month, 10);
  let input_day = parseInt(form.day, 10);
  let sum_days = final_day(input_year, input_month);

  let additional_month = 0;
  if (input_day > current_day) {
    current_day = current_day + sum_days;
    additional_month = 1;
  }
  results.days = current_day - input_day;
  let additional_year = 0;
  if (input_month >= current_month) {
    current_month = current_month + 12;
    additional_year = 1;
  }
  let final_month = current_month - (input_month + additional_month);
  let final_year = current_year - (input_year + additional_year);
  if (final_month === 12) {
    final_year = final_year + 1;
    final_month = 0;
  }
  results.months = final_month;
  results.years = final_year;

  console.log(results);

  return results;
};
