import React from "react";
import {Loader} from "./loader/Loader";
// import clsx from "clsx";

const Button = (
  {
  children,
  variant = "primary",
  onClick = (e) => {},
  className,
  isLoading,
  ...restProps
}) => {
  switch (variant) {
    case "primary":
      className = "bg-redSecondary hover:bg-redSecondaryD transition-all w-[100%] text-[20px] text-white py-[12px] rounded-lg";
      break;
    case "bordered":
      className = "border-2 border-blackSecondary w-[40%]";
      break;
   
      default:
  }
  return (
    <button className={className} onClick={(e) => onClick(e)} {...restProps}>
      {isLoading ? <Loader /> : children}
    </button>
  );
};

export default Button;




