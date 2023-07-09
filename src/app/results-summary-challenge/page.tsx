import React from "react";
import ResultsCard from "@/components/ResultsCard";
import SummaryCard from "@/components/SummaryCard";

const ResultsSummaryChallenge = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-white p-8">
    <div className="flex flex-col lg:flex-row shadow-2xl rounded-2xl">
      <ResultsCard />
      <SummaryCard />
    </div>
  </div>
);

export default ResultsSummaryChallenge;
