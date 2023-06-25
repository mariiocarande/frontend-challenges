import React from "react";
import items from "../data.json";
import Button from "./Button";

const SummaryCard = () => (
  <div className="bg-white text-dark-gray-blue p-8 rounded-2xl w-80">
    <h3 className="font-semibold text-lg">Summary</h3>

    {/* TODO: replace with SummaryItem */}
    <ul>
      {items.map((item) => (
        <li key={item.category}>{item.score}</li>
      ))}
    </ul>

    <Button title="Continue" />
  </div>
);

export default SummaryCard;
