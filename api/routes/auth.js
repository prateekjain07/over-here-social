//Creating an API

const router = require("express").Router(); //Importing Router from Express.JS
const User = require("../models/User");
const bcrypt = require("bcrypt")
//REGISTER
router.post("/register", async (req, res) => {
  

  //Need to handle exception for duplicate ENtry
  try{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Creating new User to send
    const newUser = await new User({
      //req.body means the body of the request made
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    });

    //Save user and respond
    const user =  await newUser.save();
    res.status(200).json(user);
  }
  catch(err){
    res.status(500).json(err);
  }
})

//LOGIN
router.post("/login", async (req, res) => {
  
  try{
    const user = await User.findOne({email: req.body.email});
    !user && res.status(404).json("User Not Found");
    
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    !validPassword && res.status(400).json("Wrong Password");

    res.status(200).json(user);
  }
  catch(err){
    res.status(500).json(err);
  }
});

module.exports = router; //Exporting it for other files to use