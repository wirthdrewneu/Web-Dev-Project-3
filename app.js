const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");

const app = express();



app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "interapp/build")));

app.use("/", indexRouter);
app.get("/*", function(req,res){
	res.sendFile(path.join(__dirname,"interapp/build","index.html"));
});

// app.use(express.static(path.join(__dirname, "./interapp/build")));
// app.get("*", (request, response) => {
// 	response.sendFile(path.join(__dirname, "./interapp/build/index.html"));
// }); 

module.exports = app;
