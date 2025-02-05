// imports

const posts = require("./data/postsData");
const postsRouter = require("./routers/postsRouter");
const notFound = require("./middlewares/notFound");
const errorHandlerServer = require("./middlewares/errorHandlerServer");
const cors = require("cors");

// Local server with express.js

const express = require("express");
const app = express();
const port = 3000;
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// to get static files
app.use(express.static("public"));

// to decode the request-body for application/json
app.use(express.json());

// routers
app.use("/posts", postsRouter);

// server's errors
app.use(errorHandlerServer);

// route not found
app.use(notFound);

// console.log to show the using port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
