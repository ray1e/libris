import { BookInfo } from "./BookInfo.jsx";

export function BookCard({ book, rating, onSelect, handleKeyDown, imageLink, bookTag }) {
  return (
    <article
      className="max-w-40 max-h-76 sm:max-w-48 sm:h-84 md:max-52 md:h-88 bg-surface-default  rounded-lg outline-1 outline-offset-1  shadow-sm outline-border-default inline-flex flex-col justify-center items-start gap-2 pb-2"
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <img
        src={imageLink}
        alt="Book cover placeholder"
        width={300}
        height={400}
        className="h-44 rounded-lg object-cover w-full aspect-2/3 shrink-0"
      />
      <div className="flex-1 pl-2">
        <BookInfo
          rating={rating}
          book={book}
          tag={bookTag}
          
        />
      </div>
    </article>
  );
}
