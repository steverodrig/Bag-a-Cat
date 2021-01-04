const mongoose = require ("mongoose");
const faker = require ("faker");
const axios = require ("axios");
const dB = require ("../models")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/catlist");

async function generateData() {

    const results = await axios.get("https://api.thecatapi.com/v1/images/search?limit=40&page=100&order=DESC")
 
    let images = results.data.map(item => item.url)

    const breeds = ["Balinese", "American Shorthair", "American Wirehair", "Birman", "Burmese", "Siamese", "Chartreux", "Himalayan", "Maine Coon", "Persian", "Russian Blue", "Ragdoll", "British Shorthair", "Sphynx Cat"]
    const age = [.5, 1, 2, 3, 4, 5, 6, 7];
    

    for(let i = 0; i < 40; i++) {
        const randBreed = Math.floor(Math.random()*breeds.length);
        const randAge =  Math.floor(Math.random()*age.length);
        const randomName = faker.name.firstName()
        const randomBio = faker.lorem.paragraph()
        const randomAge = age[randAge]
        const randomBreed = breeds[randBreed]
        const newCat = new dB.Cat({name:randomName , breed:randomBreed , age:randomAge,   image:images[i] , description:randomBio , adopted:false});
        newCat.save().then(() => console.log("cat  info saved"));
    }
}

module.exports = generateData();