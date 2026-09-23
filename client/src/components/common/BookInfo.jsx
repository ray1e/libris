import { BookMeta } from "./BookMeta.jsx";
import { RatingBadge } from "./RatingBadge.jsx";
import { ReadStatusTag } from "./ReadStatusTag.jsx";
import { cn } from "../../lib/utils.js";

export function BookInfo({ book, rating, tag, className }) {
  const bookTitle = book?.title ?? "";
  const bookAuthors = book?.authors ?? "";
  const bookMetaSize = book?.metaSize ?? "md"; /*"sm", "md", "lg"*/
  const readStatus = book?.readStatus ?? "";
  const metaClassName = book?.metaClassName ?? "";
  //const readStatus = book?.status ?? "to-read"; /*reading, completed*/

  const ratingBadgeLabel = rating?.label;
  const ratingValue = rating?.value ?? 0;
  const ratingReadOnly = rating?.readOnly;
  const ratingSize = rating?.size ?? "sm"; /*"sm", "md", "lg"*/
  const onRatingChange = rating?.onChange;
  const maxRatingStars = rating?.maxStars ?? 5;
  const fieldLabelSize = rating?.fieldLabelSize ?? "sm"; /*"sm", "md", "lg"*/

  return (
    <div
      className={cn(
        "inline-flex min-w-0 w-full min-h-0 flex-col justify-start items-start gap-1.5",
        className,
      )}
    >
      <BookMeta
        bookTitle={bookTitle}
        bookAuthors={bookAuthors}
        size={bookMetaSize}
        className={cn("min-w-0",metaClassName)}
      />
      {readStatus === "to-read" ? (
        <span className="inline-flex body-xsm italic py-0.5 h-6.5 text-text-disabled items-center justify-center">
          Not rated yet
        </span>
      ) : (
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
      )}
      {/*<ReadStatusTag readStatus={readStatus} />*/}
      {tag}
    </div>
  );
}
