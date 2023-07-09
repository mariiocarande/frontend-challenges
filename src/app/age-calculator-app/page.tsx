import CalculatorCard from "@/components/ageCalulatorApp/CalculatorCard";
import classNames from "classnames";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "700", "800"], subsets: ["latin"] });

const AgeCalculatorApp = () => (
  <div
    className={classNames(
      "flex min-h-screen flex-col items-center justify-center bg-age-light-grey p-8",
      poppins.className
    )}
  >
    <CalculatorCard />
  </div>
);

export default AgeCalculatorApp;
