const router = require('express').Router();
let Character = require('../models/character.model');

router.route('/').get((req, res) => {
    Character.find()
    .then(character => res.json(character))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const fullName = req.body.fullName;
    const age = req.body.age;
    const race = req.body.race;
    const bio = req.body.bio;
    const relatives = Array(req.body.relatives);

    const newCharacter = new Character({
        fullName,
        age,
        race,
        bio,
        relatives,
    });

    newCharacter.save()
    .then(() => res.json('Character added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;