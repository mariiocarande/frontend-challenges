import classNames from "classnames";
import Image from "next/image";
import React from "react";
import iconReaction from "../../public/assets/icon-reaction.svg";
import iconMemory from "../../public/assets/icon-memory.svg";
import iconVisual from "../../public/assets/icon-visual.svg";
import iconVerbal from "../../public/assets/icon-verbal.svg";

export type Category = "reaction" | "memory" | "verbal" | "visual";

interface Props {
  category: Category;
  title: string;
  score: number;
}

interface Variants {
  class: string;
  icon: string;
}

const variants: { [name in string]: Variants } = {
  reaction: {
    class: "font-bold text-light-red bg-light-red-95",
    icon: iconReaction,
  },
  memory: {
    class: "font-bold text-orangey-yellow bg-orangey-yellow-95",
    icon: iconMemory,
  },
  verbal: {
    class: "font-bold text-green-teal bg-green-teal-95",
    icon: iconVerbal,
  },
  visual: {
    class: "font-bold text-cobalt-blue bg-cobalt-blue-95",
    icon: iconVisual,
  },
};

const SummaryItem: React.FC<Props> = ({
  title,
  category = "reaction",
  score,
}) => (
  <div
    className={classNames(
      "flex justify-between p-3 w-full rounded-lg my-4",
      variants[category].class
    )}
  >
    <div className="flex gap-2">
      <Image
        src={variants[category].icon}
        alt="icon category"
        className={classNames(variants[category].class)}
      />
      <div className={classNames(variants[category].class)}>{title}</div>
    </div>
    <div className="flex gap-2 text-black">
      <span className="font-bold">{score}</span>
      <span className="flex text-zinc-500">/ 100</span>
    </div>
  </div>
);

export default SummaryItem;
