import clsx from "clsx";
import React from "react";

const Container = ({ children, variant, className, ...restProps }) => {
  let style = "flex items-center justfy-center w-[100%]";
  switch (variant) {
    case "contain":
      className = "w-100% px-[50px]";
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
