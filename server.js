const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dB = require ("./models");
let { Cat } = require("./models");
const PORT = process.env.PORT ||3001;  

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/v1/cats", function (req, res) {
  Cat.find()
      .then(cats => res.json(cats))
      .catch(err => res.status(400).json("Error: " + err));
      console.log("test")
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/catlist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
