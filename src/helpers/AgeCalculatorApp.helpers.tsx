import dayjs from "dayjs";

export enum DateType {
  DAY = "day",
  MONTH = "month",
  YEAR = "year",
}

export const calculateAge = (year: number, month: number, day: number) => {
  const today = dayjs();
  const birthDate = dayjs(`${year}-${month}-${day} 00:00:00`);

  const ageYears = today.diff(birthDate, "years");
  let ageMonths = today.diff(birthDate, "months") - ageYears * 12;
  let ageDays = today.diff(birthDate, "days") - ageYears * 365 - ageMonths * 30;

  if (
    today.month() === birthDate.month() &&
    today.date() === birthDate.date()
  ) {
    ageDays = 0;
    ageMonths = 0;
  }

  return {
    years: ageYears,
    months: ageMonths,
    days: ageDays,
  };
};
