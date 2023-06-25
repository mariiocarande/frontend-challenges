import React from "react";

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => (
  <button className="bg-dark-gray-blue w-full rounded-2xl p-2 hover:bg-gradient-to-b from-light-slate-blue to-light-royal-blue">
    <span className="font-semibold text-white">{title}</span>
  </button>
);

export default Button;
