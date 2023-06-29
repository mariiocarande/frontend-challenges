import classNames from "classnames";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "700", "800"], subsets: ["latin"] });

const AgeCalculatorApp = () => (
  <div
    className={classNames(
      "flex min-h-screen flex-col items-center justify-center bg-white p-8",
      poppins.className
    )}
  >
    <div>
      <h1 className="text-black">Age Calculator App</h1>
    </div>
  </div>
);

export default AgeCalculatorApp;
