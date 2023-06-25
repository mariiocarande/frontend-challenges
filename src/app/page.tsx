import ResultsCard from "@/components/ResultsCard";
import SummaryCard from "@/components/SummaryCard";

const Home = () => (
  <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
    <div className="flex shadow-2xl rounded-2xl">
      <ResultsCard />
      <SummaryCard />
    </div>
  </main>
);

export default Home;
