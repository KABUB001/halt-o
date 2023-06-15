const express = require("express")
const dotenv  = require("dotenv").config()
const app = express()


app.use("/api/users/passagers", require("./routes/userPassagerRoutes"))

app.use("/api/users/conducteurs", require("./routes/userConducteurRoutes"))

app.post("/api/contacts",)
const port = process.env.PORT || 5000 
app.listen(port,()=> console.log("binvenue"))