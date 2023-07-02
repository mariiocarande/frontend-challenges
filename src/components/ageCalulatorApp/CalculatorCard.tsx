import React from 'react';

import DateItem from './DateItem';
import NumberInput from './NumberInput';
import SubmitButton from './SubmitButton';
import { DateType } from '../../helpers/AgeCalculatorApp.helpers';

const CalculatorCard = () => (
  <div className="bg-white rounded-2xl rounded-br-[4rem] md:rounded-br-[8rem] p-8 max-w-screen-sm">
    <div className="flex gap-6 flex-col md:flex-row">
      <NumberInput type={DateType.DAY} />
      <NumberInput type={DateType.MONTH} />
      <NumberInput type={DateType.YEAR} />
    </div>

    <div className="w-full h-[6rem] flex items-center relative">
      <div className="border-b border-age-light-grey w-full" />
      <div className="absolute z-1 w-full flex justify-center md:justify-end">
        <SubmitButton />
      </div>
    </div>

    <div>
      <DateItem type={DateType.YEAR} />
      <DateItem type={DateType.MONTH} />
      <DateItem type={DateType.DAY} />
    </div>
  </div>
);

export default CalculatorCard;