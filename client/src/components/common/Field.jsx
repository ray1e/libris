import { FieldLabel } from "./FieldLabel.jsx";
import { InputBox } from "./InputBox.jsx";

export function Field({
  labelText,
  fieldType, /*required, optional */
  leftIcon,
  rightIcon,
  className,
  inputName, /*<input name=?/> */
  placeholderText,
  inputType,  /*<input type=?/> */
  inputId,  /*<input id=?/> */
  as, /* "input" | "select" | "textarea" */
  children, /* Used for <option> items when as="select" */
  FieldLabelSize, /*sm, md, lg */
  ...rest
}) {
  return (
    <div className="inline-flex flex-col justify-start items-start gap-1">
      <FieldLabel
        labelText={labelText}
        fieldType={fieldType}
        inputId={inputId}
        size={FieldLabelSize}
      />
      <InputBox
        as={as}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        className={className}
        inputName={inputName}
        placeholderText={placeholderText}
        inputType={inputType}
        inputId={inputId}
        required={fieldType === "required"}
        {...rest}
      >
        {children}
        </InputBox>
    </div>
  );
}
