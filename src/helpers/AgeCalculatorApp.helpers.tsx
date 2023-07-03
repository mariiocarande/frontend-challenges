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

  const birthDateWithourYear = birthDate.add(ageYears, "years");
  const ageMonths = today.diff(birthDateWithourYear, "months");

  const birthDateWithoutYearMonth = birthDateWithourYear.add(
    ageMonths,
    "months"
  );
  const ageDays = today.diff(birthDateWithoutYearMonth, "days");

  return {
    years: ageYears,
    months: ageMonths,
    days: ageDays,
  };
};
