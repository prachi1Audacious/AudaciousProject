const validation = (err, req, res, next) => {
  if (err) {
    return res.json({
      error: true,
      data: null,
      mesage: "validation errors",
      errors: err.details.body,
    });
  }

  return next();
};

export default validation;
