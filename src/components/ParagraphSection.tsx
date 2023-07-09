import classNames from "classnames";
import React from "react";

interface Props {
  title: string;
  description: string;
  colorTitle?: string;
  colorSubTitle?: string;
}

const ParagraphSection: React.FC<Props> = ({
  title,
  description,
  colorTitle,
  colorSubTitle,
}) => (
  <div className="flex flex-col items-center my-5">
    <h2 className={classNames("text-2xl font-semibold mb-2", colorTitle)}>
      {title}
    </h2>
    <p className={classNames("px-2 text-sm w-52 text-center", colorSubTitle)}>
      {description}
    </p>
  </div>
);

export default ParagraphSection;
