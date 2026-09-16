import { FieldLabel } from "./FieldLabel.jsx";
import { StarRating } from "./StarRating.jsx";

export function RatingBadge({
  ratingValue,
  onRatingChange,
  ratingReadOnly,
  ratingSize,
  labelText,
  showRatingLabel=true,
  maxRatingStars,
  fieldLabelSize
}) {
  return (
    <div className="inline-flex w-fit flex-col flex-nowrap items-start justify-center gap-1.5 rounded bg-surface-3 pr-2 py-0.5">
      {showRatingLabel && (<FieldLabel className="shrink-0" labelText={labelText} size={fieldLabelSize}/>)}
      <StarRating
        value={ratingValue}
        onChange={onRatingChange}
        readOnly={ratingReadOnly}
        size={ratingSize}
        maxStars={maxRatingStars}
      />
    </div>
  );
}
