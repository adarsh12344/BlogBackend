//import mongoose
const mongoose = require("mongoose");

//route handler

const commentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId, // This is a reference to another model
    ref: "Post", // The model to which we are referring
  },
  user: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

//export model
module.exports = mongoose.model("Comment", commentSchema);
