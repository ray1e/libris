import { cva } from "class-variance-authority";

export const buttonVariants = cva("button", {
  variants: {
    variant: {
      primary:
        "bg-surface-action text-text-on-action active:bg-surface-action-hover rounded-lg inline-flex justify-center items-center",
      secondary:
        "bg-surface-action-secondary text-text-on-action active:bg-surface-action-hover-secondary rounded-lg inline-flex justify-center items-center",
      filter:
        "rounded-lg text-text-action outline outline-1 outline-offset-[-1px] outline-Border-action inline-flex justify-center items-center",
      notHighlited:
        "rounded-lg inline-flex text-text-action active:text-text-action-hover justify-center items-center",
      navigation:
        "rounded-lg inline-flex text-text-action active:text-text-action-hover justify-center items-center",
    },
    isSelected: {
      true: "",
      false: "",
    },
    size: {
      sm: "h-9 px-3 gap-1.5 body-sm-semi-bold",
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