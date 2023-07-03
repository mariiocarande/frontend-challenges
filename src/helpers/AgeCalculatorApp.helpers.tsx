import dayjs from "dayjs";

export enum DateType {
  DAY = "day",
  MONTH = "month",
  YEAR = "year",
}

export const calculateAge = (year: number, month: number, day: number) => {
  const today = dayjs();
  const birthDate = dayjs(`${year}-${month}-${day} 00:00:00`);

  const diff = today.diff(birthDate, "days");
  const ageYears = Math.floor(diff / 365);
  let ageMonths = Math.floor((diff % 365) / 30);
  let ageDays = Math.floor((diff % 365) % 30);

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
