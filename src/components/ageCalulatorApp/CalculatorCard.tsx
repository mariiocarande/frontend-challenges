"use client";

import React, { useState } from "react";
import { useFormik } from "formik";

import DateItem from "./DateItem";
import NumberInput from "./NumberInput";
import SubmitButton from "./SubmitButton";
import { DateType, calculateAge } from "../../helpers/AgeCalculatorApp.helpers";

const CalculatorCard = () => {
  const [results, setResults] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  const formik = useFormik({
    initialValues: {
      day: 0,
      month: 0,
      year: 0,
    },
    onSubmit: (values) => {
      setResults(calculateAge(values.year, values.month, values.day));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="bg-white rounded-2xl rounded-br-[4rem] md:rounded-br-[8rem] p-8 max-w-screen-sm">
        <div className="flex gap-6 flex-col md:flex-row">
          <NumberInput
            type={DateType.DAY}
            name="day"
            value={formik.values.day}
            onChange={formik.handleChange}
          />
          <NumberInput
            type={DateType.MONTH}
            name="month"
            value={formik.values.month}
            onChange={formik.handleChange}
          />
          <NumberInput
            type={DateType.YEAR}
            name="year"
            value={formik.values.year}
            onChange={formik.handleChange}
          />
        </div>

        <div className="w-full h-[6rem] flex items-center relative">
          <div className="border-b border-age-light-grey w-full" />
          <div className="absolute z-1 w-full flex justify-center md:justify-end">
            <SubmitButton />
          </div>
        </div>

        <div>
          <DateItem type={DateType.YEAR} value={results.years} />
          <DateItem type={DateType.MONTH} value={results.months} />
          <DateItem type={DateType.DAY} value={results.days} />
        </div>
      </div>
    </form>
  );
};

export default CalculatorCard;
