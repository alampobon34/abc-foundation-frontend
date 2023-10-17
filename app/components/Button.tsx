import React from "react";

interface ButtonProps {
  name: string;
  styles?: string;
  submit?: boolean;
  outline?: boolean;
  handleClick?: (index: any) => any;
  isActive?: any;
}
const Button = ({
  name,
  styles,
  submit,
  outline,
  handleClick,
  isActive,
}: ButtonProps) => {
  if (outline) {
    return (
      <button
        onClick={handleClick}
        className={`text-md text-primary-color font-extralight border border-primary-color py-1 px-4 ${
          isActive
            ? "bg-primary-color text-white"
            : "bg-white hover:bg-primary-color hover:text-white"
        }`}
        type={submit ? "submit" : "button"}
      >
        {name}
      </button>
    );
  } else {
    return (
      <button
        className={`text-md text-white font-extralight bg-primary-color py-2 px-3 hover:opacity-95 ${styles}`}
        type={submit ? "submit" : "button"}
      >
        {name}
      </button>
    );
  }
};

export default Button;
