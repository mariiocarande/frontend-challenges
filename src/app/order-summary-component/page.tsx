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
        "flex min-h-screen flex-col items-center justify-center bg-pale-blue-94 p-8 w-full",
        redHatDisplay.className
      )}
    >
      <div className="flex flex-row lg:flex-col items-center shadow-2xl rounded-2xl bg-white">
        <div>
          <Image
            className="rounded-l-lg lg:rounded-t-lg lg:rounded-b-none"
            alt="music-image-dance"
            src={illustration}
          />
        </div>
        <div className="p-4">
          <ParagraphSection
            colorTitle="text-black"
            colorSubTitle="text-desaturated-blue"
            title="Order Summary"
            description="You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!"
          />
          <PlanSection />
        </div>

        <div className="flex flex-col m-4 gap-2">
          <button className="fond-bold hover:cursor-pointer bg-violet-blue p-4 rounded-lg w-80">
            Proceed to Payment
          </button>
          <button className="text-black fond-bold hover:cursor-pointer">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryComponent;
