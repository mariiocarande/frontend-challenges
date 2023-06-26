import React from "react";
import items from "../data.json";
import Button from "./Button";
import SummaryItem, { Category } from "./SummaryItem";

const SummaryCard = () => (
  <div className="bg-white text-dark-gray-blue p-8 rounded-2xl w-80">
    <h3 className="font-semibold text-lg">Summary</h3>

    <div className="py-2">
      {items.map((item) => (
        <SummaryItem
          key={item.id}
          title={item.title}
          category={item.category as Category}
          score={item.score}
        />
      ))}
    </div>

    <Button title="Continue" />
  </div>
);

export default SummaryCard;
