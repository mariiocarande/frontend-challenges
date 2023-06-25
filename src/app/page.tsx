import ResultsCard from "@/components/ResultsCard";

const Home = () => (
  <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
    <div className="flex shadow-2xl rounded-lg">
      <ResultsCard />
      <div className="text-black">Summary</div>
    </div>
  </main>
);

export default Home;
