//import mongoose
const mongoose = require("mongoose");

//route handler

const likeSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId, // This is a reference to another model
    ref: "Post", // The model to which we are referring
  },
  user: {
    type: String,
    required: true,
  },
});

//export model
module.exports = mongoose.model("Like", likeSchema);
