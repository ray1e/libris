import { FieldLabel } from "./FieldLabel.jsx";
import { InputBox } from "./InputBox.jsx";

export function Field({
  labelText,
  fieldType,
  leftIcon,
  rightIcon,
  className,
  inputName,
  placeholderText,
  inputType,
  inputId,
  FieldLabelSize
}) {
  return (
    <div className="inline-flex flex-col justify-start items-start">
      <FieldLabel
        labelText={labelText}
        fieldType={fieldType}
        inputId={inputId}
        size={FieldLabelSize}
      />
      <InputBox
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        className={className}
        inputName={inputName}
        placeholderText={placeholderText}
        inputType={inputType}
        inputId={inputId}
        required={fieldType === "required"}
      />
    </div>
  );
}
