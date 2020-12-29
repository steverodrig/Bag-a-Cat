const mongoose = require ("mongoose");
const faker = require ("faker");
const axios = require ("axios");
const dB = require ("../models")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/catlist");

async function generateData() {

    const results = await axios.get("https://api.thecatapi.com/v1/images/search?limit=40&page=100&order=DESC")
 
    let images = results.data.map(item => item.url)

    for(let i = 0; i < 40; i++) {
        const randomName = faker.name.firstName()
        const randomBio = faker.lorem.paragraph()
        const newCat = new dB.Cat({name:randomName , image:images[i] , description:randomBio , adopted:false});
        newCat.save().then(() => console.log("cat  info saved"));
    }
}

module.exports = generateData();