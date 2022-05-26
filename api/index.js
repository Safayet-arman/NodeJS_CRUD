const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const userRoute = require("./routes/user");

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
)
.then(()=> console.log("MongoDB connection Succesfully")).catch((err)=>{
    console.log(err);
})
app.use(express.json);
app.use("/api/users", userRoute);




app.listen(process.env.PORT || 5000, ()=>{
    console.log("server is running on port 5000");
})