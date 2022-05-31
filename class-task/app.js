const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://safayet-arman:armanmouatasim@cluster0.pmqab.mongodb.net/class-task?retryWrites=true&w=majority")
const studentsRoutes = require("./api/routes/students");

app.use("/students", studentsRoutes);


module.exports = app;