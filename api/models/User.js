//Creating a Model
//‘Models’ are higher-order constructors that take a schema and create an instance of a 
//document equivalent to records in a relational database.

const mongoose = require("mongoose"); //A must import for creating models/


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    min: 3,
    max: 20
  },
  email:{
    type:String,
    max: 50,
    unique:true,
    require: true
  },
  password:{
    type:String,
    min : 6,
    require: true
  },
  profilePicture:{
    type: String, 
    default: ""
  },
  coverPicture:{
    type: String, 
    default: ""
  },
  followers:{
    type: Array,
    default: []
  },
  following:{
    type: Array,
    default: []
  },
  isAdmin:{
    type: Boolean,
    default: false
  },
  desc: {
    type: String,
    max : 100
  },
  from: {
    type: String,
    max : 50
  },
  relationship: {
    type: Number,
    enum : [1,2,3,4]
    //1 - Single, 2 - In Relationship, 3 - Married, 4 - Complicated
  },
  city:{
    type: String,
    max : 50
  }
},
{timestamps: true}
);


module.exports = mongoose.model("User", UserSchema);
//First two params are modelName and the Schema