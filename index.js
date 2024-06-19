const express = require("express");

const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

const blog = require("./routes/blog");
//mapping routes
app.use("/api/v1", blog);

const connectWithDb = require("./config/database");

connectWithDb();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Welcome to my blog</h1>");
});
