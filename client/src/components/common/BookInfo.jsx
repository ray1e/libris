import { BookMeta } from "./BookMeta.jsx";
import { RatingBadge } from "./RatingBadge.jsx";
import { ReadStatusTag } from "./ReadStatusTag.jsx";

export function BookInfo({ book, rating, className }) {
  const bookTitle = book?.title ?? "";
  const bookAuthors = book?.authors ?? "";
  const bookMetaSize = book?.metaSize ?? "md";
  const readStatus = book?.status ?? "to-read";

  const ratingBadgeLabel = rating?.label ?? "Rating";
  const ratingValue = rating?.value ?? 0;
  const ratingReadOnly = rating?.readOnly;
  const ratingSize = rating?.size ?? "sm";
  const onRatingChange = rating?.onChange;
  const maxRatingStars = rating?.maxStars;
  const fieldLabelSize = rating?.fieldLabelSize;

  return (
    <div className="inline-flex flex-col justify-start items-start gap-1.5">
      <BookMeta
        bookTitle={bookTitle}
        bookAuthors={bookAuthors}
        size={bookMetaSize}
        className={className}
      />
      <RatingBadge
        ratingValue={ratingValue}
        onRatingChange={onRatingChange}
        ratingReadOnly={ratingReadOnly}
        ratingSize={ratingSize}
        labelText={ratingBadgeLabel}
        showRatingLabel={true}
        maxRatingStars={maxRatingStars}
        fieldLabelSize={fieldLabelSize}
      />
      <ReadStatusTag readStatus={readStatus} />
    </div>
  );
}
