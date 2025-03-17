require("module-alias/register");

//load environment variables
require("dotenv").config();

const http = require("http");
const app = require("./app");

const connectDB = require("@root/db/connectDB");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);


//@TODO uncaught exception

const main = async () => {
  try {
    await connectDB();
    server.listen(PORT, () => {
      console.log(`server is up and running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();

// @TODO unhandledPromise Rejection
