import { cn } from "../../lib/utils.js";
const sizeMap = {
  sm: {
    labelText: "body-sm",
    optional: "body-xsm text-text-disabled",
  },
  md: { labelText: "body-md", optional: "body-sm text-text-disabled" },
  lg: { labelText: "body-lg", optional: "body-md" },
};

export function FieldLabel({ labelText, fieldType, inputId, className, size }) {
  const styles = sizeMap[size] || sizeMap.sm;
  return (
    <div
      className={cn(
        "inline-flex justify-center shrink-0  items-center gap-0.5",
        className,
      )}
    >
      <label className="inline-flex items-center body-md" htmlFor={inputId}>
        <span className={styles.labelText}>{labelText}</span>
        {fieldType === "required" && (
          <span className="body-xsm text-text-error">*</span>
        )}
        {fieldType === "optional" && (
          <span className={cn("body-xsm text-text-disabled", styles.optional)}>(optional)</span>
        )}
      </label> 
    </div>
  );
}
