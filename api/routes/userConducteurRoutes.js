const express = require("express")
const router = express.Router()


router.route("/").get((req, res)=>{
    res.status(200).json({message: "Get all conducteurs"})
});




router.route("/").post((req, res)=>{
    res.status(200).json({message: "Create conducteur"})
});




router.route("/:id").get((req, res)=>{
    res.status(200).json({message: `Get conducteur for ${req.params.id}`});
});




router.route("/:id").put((req, res)=>{
    res.status(200).json({message: `Update conducteur for ${req.params.id}`});
});




router.route("/:id").delete((req, res)=>{
    res.status(200).json({message: `Delete conducteur for ${req.params.id}`})
});



module.exports = router