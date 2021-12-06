const { catchAsync } = require("../utils");

module.exports = catchAsync( async () => {
  process.on('uncaughtException', error => {
    console.log("UNCAUGHT EXCEPTION! Shutting down...");
    console.error(error);
    process.exit(1);
  });

  process.on("unhandledRejection", error => {
    console.log("UNHANDLED REJECTION! Shutting down...");
    console.error(error);
    process.exit(1);
  });

  process.on("SIGTERM", () => {
    console.log("SIGTERM RECEIVED. Shutting down gracefully");
    process.exit(1);
  });
});