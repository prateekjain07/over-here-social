//Creating an API

const router = require("express").Router(); //Importing Router from Express.JS

router.get("/", (req, res) => {
  res.send("Hey, It's users route  ");
})



module.exports = router; //Exporting router for other files to use
//If I don't export a component, it's not available to other components