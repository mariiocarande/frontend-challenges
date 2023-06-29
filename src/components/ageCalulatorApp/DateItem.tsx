import React from "react";

export enum DateType {
  DAY = "day",
  MONTH = "month",
  YEAR = "year",
}

interface DateItemProps {
  type: DateType;
  value: number;
}

const DateItem: React.FC<DateItemProps> = ({ type, value }) => {
  const displayType = value === 1 ? type : `${type}s`;

  return (
    <div className="text-7xl font-extrabold italic">
      <span className="text-age-purple">{value}</span>{" "}
      <span className="text-age-off-black">{displayType}</span>
    </div>
  );
};

export default DateItem;
