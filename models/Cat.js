const Schema = mongoose.Schema;

const CatSchema = new Schema({
    name:{
    type: String, 
    required: true
    },
    image:{
        type: image
    },
    description:{
        type: String
    }

})

const Cat = mongoose.model('Cat', CatSchema);

module.exports = Cat;