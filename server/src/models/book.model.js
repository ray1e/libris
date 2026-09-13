import { Schema, model } from "mongoose";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: [50, "Book title must be less than 50 characters"],
    },
    authors: [
      {
        type: String,
        required: true,
        trim: true,
        maxlength: [50, "Book author must be less than 50 characters"],
      },
    ],
    readStatus: {
      type: String,
      enum: ["to-read", "reading", "finished"],
      default: "to read",
    },
    finishedDate: {
      type: Date,
      default: null,
      required: false,
    },
    rating: {
      type: Number,
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating must be at most 5"],
    },
    coverImage: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

const Book = model("Book", bookSchema);
export default Book;
