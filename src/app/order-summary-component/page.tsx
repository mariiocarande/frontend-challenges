import React from "react";
import classNames from "classnames";
import { Red_Hat_Display } from "next/font/google";

import ParagraphSection from "@/components/ParagraphSection";
import illustration from "../../../public/assets/illustration-hero.svg";
import Image from "next/image";
import PlanSection from "@/components/orderSummaryComponent/PlanSection";

const redHatDisplay = Red_Hat_Display({
  weight: ["500", "700", "900"],
  subsets: ["latin"],
});

const OrderSummaryComponent: React.FC = () => {
  return (
    <div
      className={classNames(
        "flex min-h-screen flex-col items-center justify-center bg-pale-blue-94 p-8 w-full bg-[url('/assets/pattern-background-desktop.svg')] bg-contain bg-no-repeat bg-top",
        redHatDisplay.className
      )}
    >
      <div className="flex flex-col items-center shadow-2xl rounded-2xl bg-white w-full md:w-min">
        <Image
          height={200}
          className="rounded-t-lg"
          alt="music-image-dance"
          src={illustration}
        />
        <div className="flex flex-col p-4">
          <ParagraphSection
            colorTitle="text-black"
            colorSubTitle="text-desaturated-blue"
            title="Order Summary"
            description="You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!"
          />
          <PlanSection priceValue="59.99" />
        </div>

        <div className="flex flex-col p-4 gap-2">
          <button className="fond-bold hover:cursor-pointer bg-bright-blue shadow-lg shadow-bright-blue p-4 rounded-lg w-full md:w-80 hover:opacity-80 opacity-100">
            Proceed to Payment
          </button>
          <button className="text-dark-gray-blue fond-extrabold hover:cursor-pointer opacity-80 hover:opacity-100 m-4">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryComponent;
