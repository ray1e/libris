import ENV from "../config/env.js";

export const notFound = (req, res, next) => {
  const error = new Error(`not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler = (error, req, res, next) => {
  const statusCode =
    error.statusCode || (res.statusCode === 200 ? 500 : res.statusCode);

  //structure the issues format if they exist in error.details from validation middleware
  const errorDetails = error.details?.map((issue) => ({
    field: issue.path ? issue.path.join(".") : undefined,
    message: issue.message,
  }));

  res.status(statusCode);
  res.json({
    message: error.message,
    ...(errorDetails && { details: errorDetails }),
    stack: ENV.NODE_ENV === "production" ? null : error.stack,
  });

  next();
};
