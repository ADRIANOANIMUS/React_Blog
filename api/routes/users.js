const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")

//UPDATE

router.post("/:id", async (req, res) => {

    if (req.body.userId === req.params.id) {
        if(req.body.password){
            const salt = await bcrypt.hash(req.body.password, salt)
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            })
            res.status(200).json(updateUser)
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(401).json("You can update only your account!")
    }
})

//DELETE

module.exports = router