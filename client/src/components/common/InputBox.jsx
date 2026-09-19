import { cn } from "../../lib/utils.js";

export function InputBox({
  as = "input",
  leftIcon,
  rightIcon,
  className,
  inputName,
  placeholderText,
  inputId,
  inputType = "text",
  required = false,
  children,
  ...rest
}) {
  const Component = as;
  return (
    <div className="relative w-full">
      {leftIcon && (
        <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center justify-center text-icons-disabled">
          {leftIcon}
        </div>
      )}

      <Component
        name={inputName}
        id={inputId}
        required={required}
        {...(as==="input") ? {type: inputType, placeholder: placeholderText} : {}}
        className={cn(
          "w-full py-1 bg-surface-default rounded-md outline placeholder:text-disabled -outline-offset- outline-border-disabled placeholder:body-sm",
          leftIcon ? "pl-8" : "pl-3",
          rightIcon ? "pr-10" : "pr-3",
          className,
        )}
        {...rest}
      >{children}</Component>

      {rightIcon && (
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center justify-center text-icons-disabled">
          {rightIcon}
        </div>
      )}
    </div>
  );
}
