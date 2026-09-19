import { BookMeta } from "./BookMeta.jsx";
import { RatingBadge } from "./RatingBadge.jsx";
import { ReadStatusTag } from "./ReadStatusTag.jsx";
import { cn } from "../../lib/utils.js";

export function BookInfo({ book, rating, tag, className }) {
  const bookTitle = book?.title ?? "";
  const bookAuthors = book?.authors ?? "";
  const bookMetaSize = book?.metaSize ?? "md"; /*"sm", "md", "lg"*/
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
    <div className={cn("inline-flex flex-col justify-start items-start gap-1.5", className)}>
      <BookMeta
        bookTitle={bookTitle}
        bookAuthors={bookAuthors}
        size={bookMetaSize}
        className={metaClassName}
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
      {/*<ReadStatusTag readStatus={readStatus} />*/}
      {tag}
    </div>
  );
}
