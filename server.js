const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dB = require ("./models");
const fileUpload = require("express-fileupload");
const AWS = require("aws-sdk");
const keys = require("./keys")
let Cat = require('./models/Cat');
let CatApp = require('./models/catApp');
// creating s3 instance (to allow uploads)
const s3 = new AWS.S3({
  accessKeyId: keys.s3key,
  secretAccessKey: keys.s3secret
});

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

// Finds all applicants
app.get('/v1/catApps',function (req, res) {
  CatApp.find()
      .then(apps => res.json(apps))
      .catch(err => res.status(422).json('Cannot Find Applications: ' + err));
});

// Adds new Cat
app.post('/v1/cat/new',function (req,res) {
  console.log(req.body);
  dB.Cat.create(req.body)
  .then((data) => res.json(data))
  .catch(err => res.status(422).json('Could not Add: ' + err));

});

// Adds adoption application contact info
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

// Finds a Cat by ID and Deletes
app.delete("/v1/cat/:id",function (req, res){
  dB.Cat.findByIdAndRemove({ _id: req.params.id },req.body)
  .then((data) => res.json(data))
  .catch(err => res.status(422).json('Delete Could Not Occur : ' + err));

});

// Finds a CatAPP by ID and Deletes
app.delete("/v1/catApp/:id",function (req, res){
  CatApp.findByIdAndRemove({ _id: req.params.id },req.body)
  .then((data) => res.json(data))
  .catch(err => res.status(422).json('Delete Could Not Occur : ' + err));

});

// Image File Upload Stuff

// middleware to parse/access files we uploaded from our HTML page; also gives us 'req.body'
app.use(fileUpload());
// middleware to serve up static assets
app.use(express.static("public"));


// post route to handle file upload
app.post("/upload", async (req, res) => {
    // Sending error back if no file was uploaded
    if (!req.files) {
        return res.status(400).send("No file was uploaded.");
    }

    // references the file uploaded from the input field with the 'name' attribute specified following 'req.files.'
    const uploadFile = req.files.upload;

    // setting up S3 upload parameters
    const params = {
        Body: uploadFile.data, // data from uploaded file
        Bucket: keys.s3bucket, // bucket name
        Key: `${Date.now()}-${uploadFile.name}` // file name to use for S3 bucket
    };

    // uploading file to the bucket
    s3.upload(params, (err, response) => {
        if (err) throw err;
    
        console.log(`File uploaded successfully at ${response.Location}`);
        // terminating the req/res cycle by sending a JSON object with the uploaded
        // file path AND any date sent along with the upload... this is where you 
        // could write to your db if needed, now that you have the url path for the
        // newly uploaded file!
        res.json({ url: response.Location, data: req.body });
    });
});


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/catlist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
