import React from "react";

import musicIcon from "../../../public/assets/icon-music.svg";
import Image from "next/image";

const PlanSection = () => {
  return (
    <div className="flex flex-row justify-between rounded-xl p-4 bg-very-pale-blue w-80">
      <div className="flex gap-2">
        <Image src={musicIcon} alt="music-icon" />
        <div className="flex flex-col m-">
          <h1 className="text-black font-bold">Plan</h1>
          <span className="text-desaturated-blue">$59.99/year</span>
        </div>
      </div>
      <div className="flex">
        <button className="text-bright-blue fond-bold hover:cursor-pointer">
          Change
        </button>
      </div>
    </div>
  );
};

export default PlanSection;
