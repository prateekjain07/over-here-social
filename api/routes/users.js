//Creating an API

const router = require("express").Router(); //Importing Router from Express.JS
const User = require("../models/User");
const bcrypt = require("bcrypt");

//UPDATE USER
router.put("/:id", async(req, res) => {
  if(req.body.userId == req.params.id || req.body.isAdmin){
    if(req.body.password){
      try{
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }
      catch(err){
        return res.status(500).json(err);
      }
      
    }
    try{
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set : req.body,
      });
      res.status(200).json("Account has been updated");
    }
    catch(err){
      return res.status(500).json(err);
    }
  }
  else{
    return res.status(403).json("You can only update your account");

  }
})

//DELETE USER
router.delete("/:id", async(req, res) => {
  if(req.body.userId == req.params.id || req.body.isAdmin){
    try{
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted.");
    }
    catch(err){
      return res.status(500).json(err);
    }
  }
  else{
    return res.status(403).json("You can only delete your account");

  }
})

//GET A USER
router.get("/:id", async (req, res) => {
  try{
    const user = await User.findById(req.params.id); //Sends the whole document
    const {password, updatedAt, ...other} = user._doc;
    // res.status(200).json(user);
    res.status(200).json(other);
  }
  catch(err){
    return res.status(500).json(err);
  }
})

//FOLLOW A USER
router.put("/:id/follow", async (req, res) => {
  if(req.body.userId !== req.params.id){
    try{
      const user = await User.findById(req.params.id); //User that we are gonna follow
      const currentUser = await User.findById(req.body.userId);
      
      if(!user.followers.includes(req.body.userId)){
        await user.updateOne({$push :{ followers : req.body.userId } } );
        await currentUser.updateOne({$push :{ following : req.body.userId } } );
        res.status(200).json("User has been followed");
      }
      else{
        res.status(403).json("You already follow this user");
      }
    }
    catch{
      return res.status(500).json(err);
    }

  }
  else{
    res.status(403).json("You can't follow yourself.")
  }

})
//UNFOLLOW A USER
router.put("/:id/unfollow", async (req, res) => {
  if(req.body.userId !== req.params.id){
    try{
      const user = await User.findById(req.params.id); //User that we are gonna follow
      const currentUser = await User.findById(req.body.userId);
      
      if(user.followers.includes(req.body.userId)){
        await user.updateOne({$pull :{ followers : req.body.userId } } );
        await currentUser.updateOne({$pull :{ following : req.body.userId } } );
        res.status(200).json("User has been unfollowed");
      }
      else{
        res.status(403).json("You don't follow this user");
      }
    }
    catch{
      return res.status(500).json(err);
    }

  }
  else{
    res.status(403).json("You can't follow yourself.")
  }

})



module.exports = router; //Exporting router for other files to use
//If I don't export a component, it's not available to other components