import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "../../lib/utils.js";

export function StarRating({
  value = 0,
  maxStars = 5,
  onChange,
  readOnly = false,
  size = "md", // "sm", "md", "lg"
}) {
  const [hoverRating, setHoverRating] = useState(0);

  //differeb=nt sizes of the stars
  const sizeMap = {
    sm: "size-4",
    md: "size-5",
    lg: "size-6",
  };

  const currentDisplay = hoverRating || value;

  return (
    <div
      className="inline-flex items-center gap-3"
      onMouseLeave={() => !readOnly && setHoverRating(0)}
    >
      {Array.from({ length: maxStars }, (_, index) => {
        const starNumber = index + 1;
        const isFilled = starNumber <= currentDisplay; 
        return (
          <button
            key={starNumber}
            type="button"
            disabled={readOnly}
            onClick={() => onChange?.(starNumber)}
            onMouseEnter={() => !readOnly && setHoverRating(starNumber)}
            className={`transition-transform duration-100 focus:outline-none ${
              readOnly
                ? "cursor-default"
                : "cursor-pointer hover:scale-110 active:scale-95"
            }`}
            aria-label={`Rate ${starNumber} out of ${maxStars}`}
          >
            <Star
              className={cn(
                " transition-colors ",
                sizeMap[size],
                isFilled
                  ? "fill-amber-400 text-amber-400"
                  : "fill-transparent text-slate-400",
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
