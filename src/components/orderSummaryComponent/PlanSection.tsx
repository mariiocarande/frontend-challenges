import React from "react";

import musicIcon from "../../../public/assets/icon-music.svg";
import Image from "next/image";

interface Props {
  priceValue: string;
}

const PlanSection: React.FC<Props> = ({ priceValue }) => {
  return (
    <div className="flex flex-col items-center lg:flex-row justify-between rounded-xl p-4 bg-very-pale-blue w-full md:w-80">
      <div className="flex gap-2">
        <Image src={musicIcon} alt="music-icon" />
        <div className="flex flex-col">
          <h1 className="text-black font-bold">Plan</h1>
          <span className="text-desaturated-blue">${priceValue}/year</span>
        </div>
      </div>
      <div className="flex">
        <button className="text-bright-blue fond-extrabold hover:cursor-pointer underline hover:no-underline hover:opacity-80">
          Change
        </button>
      </div>
    </div>
  );
};

export default PlanSection;
