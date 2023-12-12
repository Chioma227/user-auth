import clsx from "clsx";
import React from "react";

const Container = ({ children, variant, className, ...restProps }) => {
  let style = "flex md:items-center md:flex-row flex-col h-fit md:gap-[30px] ";
  switch (variant) {
    case "contain":
      className = "w-100% sm:px-[50px] px-[20px] sm:py-[40px] py-[20px] h-[100vh]";
      break;
    case "fitted":
      className = "w-fit px-[30px]";
      break;
    case "flexed":
      className = style;
      break;
    case "flex-end":
      className = "flex justify-end";
      break;
    case "flex-col":
      className = clsx(style, "flex-col w-[100%]");
      break;
    default:
      break;
  }
  return (
    <div variant={variant} className={className} {...restProps}>
      {children}
    </div>
  );
};

export default Container;
