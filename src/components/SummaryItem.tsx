import classNames from "classnames";
import Image from "next/image";
import React from "react";
import iconReaction from "../../public/assets/icon-reaction.svg";
import iconMemory from "../../public/assets/icon-memory.svg";
import iconVisual from "../../public/assets/icon-visual.svg";
import iconVerbal from "../../public/assets/icon-verbal.svg";

type Category = "reaction" | "memory" | "verbal" | "visual";

interface Props {
  category: Category;
  title: string;
  icon: string;
  score: number;
}

const variants: { [name in Category]: string } = {
  reaction: "font-bold text-light-red bg-light-red-95",
  memory: "font-bold text-orangey-yellow bg-orangey-yellow-95",
  verbal: "font-bold text-green-teal bg-green-teal-95",
  visual: "font-bold text-cobalt-blue bg-cobalt-blue-95",
};

const SummaryItem: React.FC<Props> = ({
  title,
  category = "reaction",
  icon,
  score,
}) => (
  <div
    className={classNames(
      "flex justify-between p-4 w-56 rounded-lg",
      variants[category]
    )}
  >
    <div className="flex gap-2">
      <Image
        src={iconReaction}
        alt="icon category"
        className={classNames(variants[category])}
      />
      <div className={classNames(variants[category])}>{title}</div>
    </div>
    <div className="flex gap-2 text-black">
      <span className="font-bold">{score}</span>
      <span className="flex text-dark-gray-blue">/ 100</span>
    </div>
  </div>
);

export default SummaryItem;
