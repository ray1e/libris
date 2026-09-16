import { cn } from "../../lib/utils.js";
import { buttonVariants } from "./buttonVariants.js";

export function Button({
  className,
  variant,
  size,
  isSelected = false,
  leftIcon,
  rightIcon,
  icon,
  label,
  ...props
}) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, isSelected }), className)}
      {...props}
    >
      {leftIcon && (
        <span className="size-4 py-0.5 flex justify-center items-center gap-2.5">
          {leftIcon}
        </span>
      )}
      {icon && (
        <span className="py-0.5 inline-flex justify-center items-center gap-2.5">
          {icon}
        </span>
      )}
      <span className="body-sm-semi-bold justify-start">{label}</span>
      {rightIcon && (
        <span className="size-4 py-0.5 flex justify-center items-center gap-2.5">
          {rightIcon}
        </span>
      )}
    </button>
  );
}
