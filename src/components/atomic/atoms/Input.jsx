import { clsx } from "clsx";
import { forwardRef } from "react";

const Input = (
  {
    onChange = (e) => null,
    variant = "primary",
    type,
    className,
    isDisabled,
    ref,
    ...restProps
  },
  inputRef
) => {
  // input style
  let style = "text-gray-400 font-sans h-[fit-content] w-full outline-0";

  //defining the variant style
  switch (variant) {
    case "primary":
      style = clsx(style, "bg-red-10");
      break;
    case "input-field-col":
      style = clsx(style, "bg-transparent text-gray-900 txt-sm_2");
      break;
      case "table-input":
      style = clsx(style, "bg-transparent text-gray-900 txt-sm_2");
      break;
  }

  return (
    <input
      type={type}
      onChange={(e) => onChange(e)}
      className={clsx(style, className)}
      disabled={isDisabled}
      ref={inputRef}
      {...restProps}
    />
  );
};

export default forwardRef(Input);
