const express = require("express")
const router = express.Router()

router.route("/").get((req, res)=>{
    res.status(200).json({message: "Get all passagers"})
});




router.route("/").post((req, res)=>{
    res.status(200).json({message: "Create passager"})
});




router.route("/:id").get((req, res)=>{
    res.status(200).json({message: `Get passager for ${req.params.id}`});
});




router.route("/:id").put((req, res)=>{
    res.status(200).json({message: `Update passager for ${req.params.id}`});
});




router.route("/:id").delete((req, res)=>{
    res.status(200).json({message: `Delete passager for ${req.params.id}`})
});





module.exports = router