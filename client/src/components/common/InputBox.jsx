import { cn } from "../../lib/utils.js";

export function InputBox({
  leftIcon,
  rightIcon,
  className,
  inputName,
  placeholderText,
  inputId,
  inputType = "text",
  required = false,
}) {
  return (
    <div className="relative w-60">
      {leftIcon && (
        <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center justify-center text-icons-disabled">
          {leftIcon}
        </div>
      )}

      <input
        name={inputName}
        placeholder={placeholderText}
        type={inputType}
        id={inputId}
        required={required}
        className={cn(
          "w-full bg-surface-page rounded-sm outline placeholder:text-disabled -outline-offset- outline-border-disabled placeholder:body-sm",
          leftIcon ? "pl-10" : "pl-3",
          rightIcon ? "pr-10" : "pr-3",
          className,
        )}
      />

      {rightIcon && (
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center justify-center text-icons-disabled">
          {rightIcon}
        </div>
      )}
    </div>
  );
}
