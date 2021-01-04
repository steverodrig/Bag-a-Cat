const mongoose = require ("mongoose");
const Schema = mongoose.Schema;


const CatSchema = new Schema({
    name:{
    type: String, 
    required: true
    },
    breed: String,
    image: String,
    description: String,
    adopted: Boolean
})

const Cat = mongoose.model('Cat', CatSchema);

module.exports = Cat;