const mongoose = require ("mongoose");
const Schema = mongoose.Schema;


const CatSchema = new Schema({
    name:{
    type: String, 
    required: true
    },
    image: String,
    description: String
})

const Cat = mongoose.model('Cat', CatSchema);

module.exports = Cat;