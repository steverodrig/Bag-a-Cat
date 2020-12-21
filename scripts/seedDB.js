const mongoose = require ("mongoose");
const faker = require ("faker");

const dB = require ("../models")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/catlist");

function generateData() {
    for(let i = 0; i <20; i++) {
        const randomName = faker.name.firstName()
        const randomImage = faker.image.cats()
        const randomBio = faker.lorem.paragraph()
        const newCat = new dB.Cat({name:randomName , image:randomImage , description:randomBio});
        newCat.save().then(() => console.log("cat  info saved"));
    }
}

module.exports = generateData();