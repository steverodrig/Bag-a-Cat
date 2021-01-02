const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dB = require ("./models");
//const db = require ("./models/catApp");
let Cat = require('./models/Cat');
let CatApp = require('./models/CatApp');
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view


// Finds all Cats
app.get('/v1/cats',function (req, res) {
  dB.Cat.find()
      .then(cats => res.json(cats))
      .catch(err => res.status(422).json('Cannot Find Cats: ' + err));
});

// Adds new Cat
app.post('/v1/cat/new',function (req,res) {
  console.log(req.body);
  dB.Cat.create(req.body)
  .then((data) => res.json(data))
  .catch(err => res.status(422).json('Could not Add: ' + err));

});

app.post('/v1/catApp',function (req,res) {
  console.log(req.body);
  CatApp.create(req.body)
  .then((data) => res.json(data))
  .catch(err => res.status(422).json('Could not Add: ' + err));

});

// Find Cat by ID
app.get('/v1/cat/:id',function (req,res) {
  dB.Cat.findById({_id: req.params.id})
  .then((data) => res.json(data))
  .catch(err => res.status(422).json('Cant find Cat: ' + err));

});

// Finds a Cat by ID and Updates
app.put("/v1/cat/:id",function (req, res){
  dB.Cat.findByIdAndUpdate({ _id: req.params.id },req.body)
  .then((data) => res.json(data))
  .catch(err => res.status(422).json('Update Could Not Occur : ' + err));

});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/catlist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
