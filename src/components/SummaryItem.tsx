import React from "react";

enum Variant {
  reaction = "Reaction",
  memory = "Memory",
  verbal = "Verbal",
  visual = "Visual",
}

interface Props {
  variant: Variant;
  title?: string;
  icon?: string;
  number?: number;
}

const variants = {
  reaction: {
    className: "text-color-light-red bg-light-red",
  },
  memory: {
    className: "text-color-orange-yellow bg-orange-yellow",
  },
  verbal: {
    className: "text-color-green-teal bg-green-teal",
  },
  visual: {
    className: "text-color-cobalt-blue bg-cobalt-blue",
  },
};

const SummaryItem: React.FC<Props> = ({ title, variant, icon, number }) => (
  <div className="flex p-4">
    <div>{icon}</div>
    <div>{title}</div>
    <div className="text-black">{number}</div>
  </div>
);

export default SummaryItem;
