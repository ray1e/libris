import { cva } from "class-variance-authority";

export const buttonVariants = cva("button", {
  variants: {
    variant: {
      primary:
        "shrink-0 bg-surface-action text-text-on-action active:bg-surface-action-hover rounded-lg inline-flex justify-center items-center",
      secondary:
        "shrink-0 bg-surface-action-secondary text-text-on-action active:bg-surface-action-hover-secondary rounded-lg inline-flex justify-center items-center",
      filter:
        "shrink-0 rounded-lg text-text-action outline outline-1 outline-offset-[-1px] outline-Border-action inline-flex justify-center items-center",
      notHighlited:
        "shrink-0 rounded-lg inline-flex text-text-action active:text-text-action-hover justify-center items-center",
      navigation:
        "shrink-0 rounded-lg inline-flex text-text-action active:text-text-action-hover justify-center items-center",
      iconOnly:
        "shrink-0 inline-flex text-text-action active:text-text-action-hover justify-center items-center",
    },
    isSelected: {
      true: "",
      false: "",
    },
    size: {
      sm: "h-9 px-1.5 gap-1.5 body-sm-semi-bold",
      md: "h-10 px-4 gap-2 body-md-semi-bold",
      lg: "h-12 px-6 gap-2.5 body-lg-semi-bold",
    },
  },
  compoundVariants: [
    {
      variant: "filter",
      isSelected: true,
      className: "bg-surface-action text-text-on-action",
    },
  ],
});