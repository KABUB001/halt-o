const express = require("express")
const dotenv  = require("dotenv").config()
const app = express()


app.use("/api/users/passengers", require("./routes/userPassengerRoutes"))

app.use("/api/users/conductors", require("./routes/userConductorRoutes"))

app.post("/api/contacts",)
const port = process.env.PORT || 5000 
app.listen(port,()=> console.log("binvenue"))