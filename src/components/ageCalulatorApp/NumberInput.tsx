import React from "react";

import { DateType } from "../../helpers/AgeCalculatorApp.helpers";

interface NumberInputProps {
  type: DateType;
}

const placeholdeMapper = {
  [DateType.DAY]: "DD",
  [DateType.MONTH]: "MM",
  [DateType.YEAR]: "YYYY",
};

const NumberInput: React.FC<NumberInputProps> = ({ type }) => (
  <div className="flex flex-col">
    <label className="text-[10px] font-bold tracking-[0.25rem] text-age-smokey-grey mb-1.5 uppercase">
      {type}
    </label>
    <input
      className="border border-gray-300 rounded-md px-4 py-2 text-2xl font-bold text-age-smokey-grey w-[120px]"
      placeholder={placeholdeMapper[type]}
    />
  </div>
);

export default NumberInput;
