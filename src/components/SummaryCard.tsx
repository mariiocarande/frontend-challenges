import React from "react";
import items from "../data.json";

const SummaryCard = () => (
  <div className="bg-white text-dark-gray-blue p-8 rounded-2xl">
    <h3 className="font-semibold text-lg">Summary</h3>

    {/* TODO: replace with SummaryItem */}
    <ul>
      {items.map((item) => (
        <li key={item.category}>{item.score}</li>
      ))}
    </ul>
  </div>
);

export default SummaryCard;
