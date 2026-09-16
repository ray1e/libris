import { BookInfo } from "./BookInfo.jsx";

export function BookCard({ book, rating, onSelect, handleKeyDown }) {
  return (
    <article
      className=" w-full max-w-44 h-80 sm:max-w-48 sm:h-84 md:max-52 md:h-88 bg-surface-default  rounded-lg outline-1 outline-offset-1 outline-border-default inline-flex flex-col justify-center items-start gap-2 "
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <img
        src="https://picsum.photos/300/400"
        alt="Book cover placeholder"
        width={300}
        height={400}
        className="h-44 rounded-lg object-cover w-full aspect-2/3 shrink-0"
      />
      <div className="flex-1">
        <BookInfo
          rating={rating}
          book={book}
        />
      </div>
    </article>
  );
}
