import React from "react";

interface ButtonProps {
  name: string;
  styles?: string;
  submit?: boolean;
}
const Button = ({ name, styles, submit }: ButtonProps) => {
  return (
    <button
      className={`text-md text-white font-extralight bg-primary-color py-2 px-3 hover:opacity-95 ${styles}`}
      type={submit ? "submit" : "button"}
    >
      {name}
    </button>
  );
};

export default Button;
