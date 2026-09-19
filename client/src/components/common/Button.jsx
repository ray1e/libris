import { cn } from "../../lib/utils.js";
import { buttonVariants } from "./buttonVariants.js";

export function Button({
  className,
  variant = "primary" /*secondary, filter, not-highlited, navigation, iconOnly, filter */,
  size = "sm",
  isSelected = false,
  leftIcon,
  rightIcon,
  type,
  icon,
  label = "button",
  ...props
}) {
  return (
    <button
      className={cn("cursor-pointer", buttonVariants({ variant, size, isSelected }), className)}
      type={type}
      {...props}
    >
      {leftIcon && (
        <span className="size-4 py-0.5 flex justify-center items-center gap-2.5">
          {leftIcon}
        </span>
      )}
      {icon && variant === "iconOnly" && (
        <span className=" inline-flex justify-center items-center gap-2.5">
          {icon}
        </span>
      )}
      {variant !== "iconOnly" && (
        <span className="body-sm-semi-bold justify-start">{label}</span>
      )}
      {rightIcon && (
        <span className="size-4 py-0.5 flex justify-center items-center gap-2.5">
          {rightIcon}
        </span>
      )}
    </button>
  );
}
