import { cn } from "../../lib/utils.js";

const sizeMap = {
  sm: {
    title: "body-sm-semi-bold items-center justify-start ",
    author: "body-xsm items-center justify-start",
    gap: "gap-0.5",
  },
  md: {
    title: "body-md-semi-bold items-center justify-start ",
    author: "body-sm items-center justify-start",
    gap: "gap-1.5",
  },
  lg: {
    title: "body-lg-semi-bold items-center justify-start ",
    author: "body-md items-center justify-start",
    gap: "gap-2.5",
  },
};



export function BookMeta({ bookTitle, bookAuthors, className, size = "md" /*sm, lg */ }) {
  const styles = sizeMap[size] || sizeMap.md;
  const authors = Array.isArray(bookAuthors)
    ? bookAuthors.join(", ")
    : bookAuthors;

  return (
    <div className={cn("inline-flex min-w-0 flex-col", styles.gap, className)}>
      <span className={cn("line-clamp-2 pb-1.5", styles.title)}>
        {bookTitle}
      </span>
      <span className={cn("line-clamp-1", styles.author)}>
        {authors}
      </span>
    </div>
  );
}
