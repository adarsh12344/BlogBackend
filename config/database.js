const mongoose = require("mongoose");
require("dotenv").config();
// Connect to MongoDB
const connectWithDb = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("Connected to MongoDB"))
    .catch((error) => {
      console.log("Error connecting to MongoDB");
      console.log(error);
      process.exit(1);
    });
};

module.exports = connectWithDb;
