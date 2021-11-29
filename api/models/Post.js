//Creating a Model

const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  userId: {
    type: String,
    require: true,
    min: 3,
    max: 20
  },
  desc: {
    type: String,
    max : 500
  },
  img: {
    type: String,
    },
  likes: {
    type: Array,
    default : []
  },
},
{timestamps: true}
);


module.exports = mongoose.model("Post", PostSchema);
//First two params are modelName and the Schema

/* Things I can add myself
1. Comments feature and maybe likes on them

*/