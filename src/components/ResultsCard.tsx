import React from "react";

const ResultsCard = () => (
  <div className="flex flex-col items-center bg-gradient-to-b from-light-slate-blue to-light-royal-blue rounded-2xl p-8 w-full lg:w-72">
    <h3 className="text-light-lavender font-semibold text-lg">Your Result</h3>

    <div className="flex flex-col items-center bg-gradient-to-b from-violet-blue to-persian-blue rounded-full w-40 p-10 mb-6 mt-6">
      <div className="text-6xl font-bold text-pale-blue">76</div>
      <div className="text-light-lavender text-sm font-semibold opacity-60">
        of 100
      </div>
    </div>

    <div className="flex flex-col items-center my-5">
      <h2 className="text-2xl font-semibold mb-2">Great</h2>
      <p className="px-2 text-light-lavender text-sm w-52 text-center">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  </div>
);

export default ResultsCard;
