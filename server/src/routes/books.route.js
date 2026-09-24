import { Router } from "express";
import { addBook } from "../controllers/book/books.controller.js";
import {
  validateReqBody,
  validateIdParams,
} from "../middleware/validate.middleware.js";
import {
  createBookSchema,
  idParamsSchema,
  updateSchema,
} from "../validators/book.validator.js";
import {
  deleteBook,
  updateBook,
  getAllBooks,
  getBook,
} from "../controllers/book/books.controller.js";

const bookRouter = Router();

//get all books
bookRouter.get("/", getAllBooks);

//get a book
bookRouter.get("/:bookId", validateIdParams(idParamsSchema("bookId")), getBook);

//add a book
bookRouter.post("/", validateReqBody(createBookSchema), addBook);

//delete a book
bookRouter.delete(
  "/:bookId",
  validateIdParams(idParamsSchema("bookId")),
  deleteBook,
);

//update book details
bookRouter.patch(
  "/:bookId",
  validateIdParams(idParamsSchema("bookId")),
  validateReqBody(updateSchema),
  updateBook,
);

export default bookRouter;
