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
    gap: "gap-0.5",
  },
  lg: {
    title: "body-lg-semi-bold items-center justify-start ",
    author: "body-md items-center justify-start",
    gap: "gap-0.5",
  },
};



export function BookMeta({ bookTitle, bookAuthors, className, size = "md" /*sm, lg */ }) {
  const styles = sizeMap[size] || sizeMap.md;
  return (
    <div className={cn("inline-flex flex-col", styles.gap, className )}>
      <span className={cn("pb-1.5",styles.title, className)}>{bookTitle}</span>
      <span className={cn(styles.author, className)}>{bookAuthors}</span>
    </div>
  );
}
