import { cn } from "../../lib/utils.js";
export function ReadStatusTag({ readStatus="to-read", /*reading, completed*/ className  }) {
  return (
    <div className={cn("px-2 py-1 rounded-lg border-2 border-border-information inline-flex justify-center items-center", className)}>
      <span className="body-sm text-text-information">
        {readStatus}
      </span>
    </div>
  );
}
