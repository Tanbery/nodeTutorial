const express  = require("express");
const router = express.Router();
const Post  = require("../models/Post");

//Get all posts
router.get("/",async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err})
    }
});

//Get a specific post
router.get("/:postId", async (req,res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message:err})
    }
});

//delete a specific post
router.delete("/:postId", async (req,res) => {
    try{
        const post = await Post.findByIdAndDelete(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message:err})
    }
});

//update a specific post
router.patch("/:postId", async (req,res) => {
    try{
        const post = await Post.findByIdAndUpdate(req.params.postId,{title:req.body.title});
        res.json(post);
    }catch(err){
        res.json({message:err})
    }
});


//create a post
router.post("/",async(req,res) => {
    
    const post = new Post({
        title:req.body.title,
        description:req.body.description
    });

    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message:err})
    }    
});

module.exports = router