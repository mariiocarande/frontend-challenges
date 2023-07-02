import React from "react";
import classNames from "classnames";

import { DateType } from "../../helpers/AgeCalculatorApp.helpers";

interface NumberInputProps {
  type: DateType;
  isError?: boolean;
}

const placeholdeMapper = {
  [DateType.DAY]: "DD",
  [DateType.MONTH]: "MM",
  [DateType.YEAR]: "YYYY",
};

const limitsMapper = {
  [DateType.DAY]: { min: 1, max: 31 },
  [DateType.MONTH]: { min: 1, max: 12 },
  [DateType.YEAR]: { min: 1900, max: new Date().getFullYear() },
};

const NumberInput: React.FC<NumberInputProps> = ({ type, isError = false }) => {
  const labelClassName = isError ? 'text-age-light-red' : 'text-age-smokey-grey';
  const inputClassName = isError ? 'border-age-light-red focus:border-age-light-red' : 'border-gray-300 focus:border-age-purple';

  return (
    <div className="flex flex-col">
      <label className={classNames('text-[10px] font-bold tracking-[0.25rem] mb-1.5 uppercase', labelClassName)}>
        {type}
      </label>
      <input
        className={classNames(
          'w-[120px] border focus-visible:outline-none rounded-md px-4 py-2 text-2xl font-bold placeholder-age-smokey-grey text-age-off-black',
          inputClassName,
        )}
        placeholder={placeholdeMapper[type]}
        type="number"
        min={limitsMapper[type].min}
        max={limitsMapper[type].max}
      />
      {isError && (
        <div className="mt-2 text-xs text-age-light-red italic">
          This field is required
        </div>
      )}
    </div>
  );
};

export default NumberInput;
