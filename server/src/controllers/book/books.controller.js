import {
  createBook as createBookService,
  deleteBook as deleteBookService,
  updateBook as updateBookService,
  getAllBooks as getAllBooksService,
} from "../../services/book.services.js";

export const addBook = async (req, res, next) => {
  try {
    const bookData = req.body;

    const book = await createBookService(bookData);

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBook = async (req, res, next) => {
  try {
    const { bookId } = req.params;
    await deleteBookService(bookId);

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export const updateBook = async (req, res, next) => {
  try {
    const { bookId } = req.params;
    const bookData = req.body;

    const updatedBook = await updateBookService(bookData, bookId);

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllBooks = async (req, res, next) => {
  try {
    const books = await getAllBooksService();
    res.status(200).json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (error) {
    next(error);
  }
};
