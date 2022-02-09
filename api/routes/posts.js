const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
//CREATE A POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }
    catch(err){
        return res.status(500).json(err);
    }
})

//UPDATE A POST
router.put("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({ $set : req.body });
            res.status(200).json("Post Updated"); 
        }
        else{
            res.status(403).json("You can update only your post.")
        }

    }
    catch(err){
        return res.status(500).json(err);
    }
})

//DELETE A POST
router.delete("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("Post Deleted"); 
        }
        else{
            res.status(403).json("You can delete only your post.")
        }

    }
    catch(err){
        return res.status(500).json(err);
    }
})

//LIKE A POST
router.put("/:id/like", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await Post.updateOne({$push : {likes : req.body.userId}});
            res.status(200).json("Post Liked");
        }
        else{
            await Post.updateOne({$pull : {likes : req.body.userId}});
            res.status(200).json("Post Unliked");
        }

    }
    catch(err){
        return res.status(500).json(err);
    }
})
//GET TIMELINE POSTS
router.get("/timeline/:userId", async (req, res) => {
    try{
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({userId: currentUser._id});

        const friendsPosts = await Promise.all(
            currentUser.following.map((friendId) => {
                return Post.find({userId: friendId});
            })
        );
        res.status(200).json(userPosts.concat(...friendsPosts));
    }
    catch(err){
        return res.status(500).json(err);
    }
})

//GET A POST
router.get("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post); 

    }
    catch(err){
        return res.status(500).json(err);
    }
})
//GET USER'S ALL POSTS
router.get("/profile/:username", async (req, res) => {
    try{
        const user = await User.findOne({username: req.params.username});
        const posts = await Post.find({userId: user._id});

        res.status(200).json(posts);
    }
    catch(err){
        return res.status(500).json(err);
    }
})


module.exports  = router;