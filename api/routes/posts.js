const router = require("express").Router()
const User = require("../models/User")
const Post = require("../models/Post")


//CREATE POST

router.post("/", async (req, res) => {
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    }catch(err){
        res.status(500).json(err)
    }

})

//UPDATE POST
router.delete("/:id", async (req, res) => {
        
})

//DELETE POST

//GET POST
router.get("/:id", async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        const {password, ...others} = user._doc
        res.status(200).json(others)        
    }catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router