import { BookInfo } from "./BookInfo.jsx";

export function BookCard({
  book,
  rating,
  onSelect,
  handleKeyDown,
  imageLink,
  bookTag,
}) {
  return (
    <article
      className="w-full max-h-78 bg-surface-default  rounded-lg outline-1 outline-offset-1  shadow-sm outline-border-default inline-flex flex-col justify-center items-start"
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <img
        src={imageLink}
        alt="Book cover placeholder"

        className="h-40 rounded-lg object-cover w-full aspect-2/3 shrink-0"
      />
      <div className="flex-1 pl-2  py-2 mt-auto">
        <BookInfo rating={rating} book={book} tag={bookTag} />
      </div>
    </article>
  );
}
