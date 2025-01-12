const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  //When we delete the post we want to delete the image from cloudinary
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,  //referencing the 'User' model
    ref: "User",
  },
  createdAt: {
    type: Date,
    //If we don't put in a date, it will be automatically set.
    default: Date.now,
  },
});


//Exporting the schema as a model.'Post' is the name of the model, and assigning PostSchema to that model.We can add a third argument, mongoose will automatically make one, the plural of Post- this will be the collection name.
module.exports = mongoose.model("Post", PostSchema);
