import BookModel from "../models/book.model.js";

export const createBook = async (bookData) => {
  const { title, authors } = bookData;
  const existingBook = await BookModel.findOne({ title, authors });
  if (existingBook) {
    const error = new Error("Book already exists");
    error.statusCode = 409;
    throw error;
  }

  const newBook = await BookModel.create(bookData);

  return newBook;
};

export const deleteBook = async (bookId) => {
  const bookExist = await BookModel.findById(bookId);
  if (!bookExist) {
    const error = new Error("Book not found");
    error.statusCode = 404;
    throw error;
  }
  await BookModel.findByIdAndDelete(bookId, {
    runValidators: true,
    lean: true,
    returnDocument: "after",
  });
};

export const updateBook = async (bookData, bookId) => {
  const bookExist = await BookModel.findById(bookId);
  if (!bookExist) {
    const error = new Error("Book not found");
    error.statusCode = 404;
    throw error;
  }

  const updatedBook = await BookModel.findByIdAndUpdate(
    bookId,
    { ...bookData },
    {
      returnDocument: "after",
      runValidators: true,
    },
  );

  return updatedBook;
};

export const getAllBooks = async () => {
  const books = await BookModel.find().lean();
  return books;
}
