const express = require("express");
const app = express();

const listingsRouter = require("./routes/listings.route");
const messagesRouter = require("./routes/messages.route");

const port = 3000;

app.use((req, res, next) => {
  const date = Date.now();
  next();
  const delta = Date.now() - date;
  console.log(`the server takes ${delta} to reach to ${req.url} end point  `);
});

app.use(express.json());

app.use("/listings", listingsRouter);
app.use("/messages", messagesRouter);

app.listen(port, () => {
  console.log(`server running on port ${port}...`);
});
