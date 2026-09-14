import { cn } from "../../lib/utils.js";
import { buttonVariants } from "./buttonVariants.js";

export function Button({
  className,
  variant,
  size,
  isSelected = false,
  leftIcon,
  rightIcon,
  children,
  ...props
}) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, isSelected }), className)}
      {...props}
    >
      {leftIcon && (
        <span className="size-6 p-0.5 flex justify-center items-center gap-2.5">
          {leftIcon}
        </span>
      )}
      <span className="body-sm-semi-bold justify-start">{children}</span>
      {rightIcon && (
        <span className="size-6 p-0.5 flex justify-center items-center gap-2.5">
          {rightIcon}
        </span>
      )}
    </button>
  );
}
