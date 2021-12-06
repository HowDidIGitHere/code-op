const { catchAsync } = require("../../utils");

module.exports = catchAsync( async (app) => {
  const allowList = [
    "https://code.jquery.com",
    "https://cdn.jsdelivr.net",
    "https://cdnjs.cloudflare.com",
    "https://kit.fontawesome.com",
    "https://apis.google.com"
  ];

  app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' " + allowList.join(" "));
    return next();
  });

  return app;
})