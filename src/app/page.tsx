import Link from "next/link";

const challengues = [
  {
    title: "Results Summary Challenge",
    path: "/results-summary-challenge",
  },
  {
    title: "Order Summary Component",
    path: "/order-summary-component",
  },
  {
    title: "Age calculator app",
    path: "/age-calculator-app",
  },
];

const Home = () => (
  <main>
    <section className="flex min-h-screen flex-col items-center justify-center bg-white p-8">
      <ul>
        {challengues.map((challengue) => (
          <li key={challengue.title}>
            <Link
              href={challengue.path}
              className="flex text-white p-4 rounded-lg bg-slate-500 m-4"
            >
              {challengue.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  </main>
);

export default Home;
