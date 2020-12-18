const { Router } = require('express');
let Cat = require('../models/Cat.model');

Router.route('/').get((req, res) => {
    Cat.find()
        .then(cats => res.json(cats))
        .catch(err => res.status(400).json('Error: ' + err));
});

Router.route('/add').post((req,rres) => {
    const name = req.body.name;
    const image = req.body.image;
    const description = req.body.description;

    const newCat = new Cat({
        name,
        image,
        description
    });

    newCat.save()
    .then(() => res.json(' Cat added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;