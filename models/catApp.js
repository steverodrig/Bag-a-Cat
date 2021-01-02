const mongoose = require ("mongoose");
const Schema = mongoose.Schema;


const CatAppSchema = new Schema({
    catID:{
    type: String, 
    required: true
    },
    name: String,
    email: String,
    phone: String
})

const CatApp = mongoose.model('CatApp', CatAppSchema);

module.exports = CatApp;