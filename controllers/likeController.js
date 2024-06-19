const Like = require("../models/likeModel");
const Post = require("../models/postModel");

//like a post

exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({
      post,
      user,
    });
    const savedLike = await like.save();

    //update the post to which the like belongs

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    )
      .populate("likes")
      .exec();

    res.json({
      post: updatedPost,
    });
  } catch (error) {
    return res.status(500).json({ error: "Error while liking post" });
  }
};

//unlike a post

exports.unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;

    //find the like object to delete
    const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });

    //update the post to which the like belongs
    const updatedPost = await Post.findByIdAndDelete(
      post,
      {
        $pull: { likes: deletedLike._id },
      },
      { new: true }
    );

    res.json({
      post: updatedPost,
    });
  } catch (error) {
    return res.status(500).json({ error: "Error while unliking post" });
  }
};

exports.dummyLink = (req, res) => {
  res.send("<h1>This is dummy page </h1>");
};
