import React from "react";
import Image from "next/image";
import classNames from "classnames";

import iconArrow from "../../../public/assets/icon-arrow.svg";

interface SubmitButtonProps {
  className?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ className }) => (
  <button
    type="submit"
    className={classNames(
      'bg-age-purple w-fit rounded-full p-4 my-2 hover:bg-age-off-black',
      className,
    )}
  >
    <Image src={iconArrow} alt="submit-button" width={32} height={32} />
  </button>
);

export default SubmitButton;
