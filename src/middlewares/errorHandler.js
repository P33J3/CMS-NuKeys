function ErrorHandler(Error, req, res, next) {
  res.status(Error.status || 500);
  console.log("Error Handler Middleware Running");
  res.send({
    error: true,
    message: Error.message || "Internal Server Error ",
  });
}

export default ErrorHandler;
