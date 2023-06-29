import React from "react";
import Image from "next/image";

import iconArrow from "../../../public/assets/icon-arrow.svg";

const SubmitButton = () => (
  <button
    type="submit"
    className="bg-age-purple w-fit rounded-full p-4 my-2 hover:bg-age-off-black"
  >
    <Image src={iconArrow} alt="submit-button" width={32} height={32} />
  </button>
);

export default SubmitButton;
