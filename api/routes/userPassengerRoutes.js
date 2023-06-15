const express = require("express")
const router = express.Router()
const {getAllPassengers, createPassenger, getPassenger, updatePassenger, deletePassenger}  = require("../controllers/userPassengerController")
router.route("/").get(getAllPassengers);


router.route("/").post(createPassenger);


router.route("/:id").get(getPassenger);


router.route("/:id").put(updatePassenger);


router.route("/:id").delete(deletePassenger);


module.exports = router