import { z } from "zod";
const rawBookObject = z.object({
  title: z.string().trim().min(1).max(50),
  authors: z.preprocess(
    (author) =>
      typeof author === "string"
        ? author
            .split(",")
            .map((author) => author.trim())
            .filter((author) => author.length > 0)
        : author,
    z.array(z.string().min(1).max(50)).min(1),
  ),
  readStatus: z.enum(["to-read", "reading", "finished"]),
  finishedDate: z.coerce.date().nullable().optional(),
  rating: z.coerce.number().min(1).max(5).optional(),
  coverImage: z.string().trim().optional(),
});

const applyBookRefinements = (schema) => {
  return schema
    .refine(
      (data) => {
        if (data.readStatus === "finished" && !data.finishedDate) {
          return false;
        }
        return true;
      },
      {
        message: "finishedDate is required when readStatus is 'finished'",
        path: ["finishedDate"],
      },
    )
    .refine(
      (data) => {
        if (
          (data.readStatus === "to-read" || data.readStatus === "reading") &&
          data.finishedDate
        ) {
          return false;
        }
        return true;
      },
      {
        message:
          "Cannot enter finishedDate if readStatus is 'to-read' or 'reading'",
        path: ["finishedDate"],
      },
    )
    .refine(
      (data) => {
        if (data.readStatus === "to-read" && data.rating !== undefined) {
          return false;
        }
        return true;
      },
      {
        message: "Cannot rate a book that is marked as 'to-read'",
        path: ["rating"],
      },
    );
};

export const createBookSchema = applyBookRefinements(
  rawBookObject.extend({
    readStatus: z.enum(["to-read", "reading", "finished"]).default("to-read"),
  }),
);

export const updateSchema = applyBookRefinements(
  rawBookObject.partial().refine((data) => Object.keys(data).length > 0, {
    message: "At least one field must be provided for update",
  }),
);

export const objectIdSchema = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId format");

// accept multiple params
export const idParamsSchema = (...paramNames) => {
  const shape = {};
  paramNames.forEach((param) => {
    shape[param] = objectIdSchema;
  });
  return z.object(shape);
};
