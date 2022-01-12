const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//Uncaught Error
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

dotenv.config({ path: "backend/config/config.env" });

//connecting to database
connectDatabase();
// console.log(youtube);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

//Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.stack}`);
  console.log(`shutting down the server due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
 