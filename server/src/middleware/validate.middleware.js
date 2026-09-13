export const validateReqBody = (schema) => (req, res, next) => {
  //safeParse avoids throwing errors and instead returns an error object or the validated data
  /*zod error looks like
    {
      success: false,
      error: [ZodError]
    }   
    */
  const result = schema.safeParse(req.body);
  if (!result.success) {
    const error = new Error("validation Failed");
    error.statusCode = 400;
    error.details = result.error.issues;
    return next(error);
  }

  req.body = result.data;
  next();
};

export const validateIdParams = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.params);
  if (!result.success) {
    const error = new Error("validation Failed");
    error.statusCode = 400;
    error.details = result.error.issues;
    return next(error);
  }

  req.params = result.data;
  next();
};
