//import model

const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//logic for creating a comment

exports.createComment = async (req, res) => {
  try {
    //fetch data from the request body
    const { post, user, body } = req.body;
    //create a comment object
    const comment = new Comment({
      post,
      user,
      body,
    });
    //save the comment to the database
    const savedComment = await comment.save();

    //find the post to which the comment belongs
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { comments: savedComment._id },
      },
      { new: true }
    )
      .populate("comments") //populate the comments field of the post
      .exec();

    res.json({
      post: updatedPost,
    });
  } catch (error) {
    return res.status(500).json({ error: "Error while creating comment " });
  }
};
