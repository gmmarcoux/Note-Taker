//Dependencies
const path = require('path');
const fs = require('fs');

//ID
const generateUniqueID = require('generateuniqueid');

//Routes
module.exports = (app) => {

    //GET
    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/bd.json'));
    });

    //POST
    router.post('/animals', (req, res) => {
        // set id based on what the next index of the array will be
        req.body.id = animals.length.toString();
      
        if (!validateAnimal(req.body)) {
          res.status(400).send('The animal is not properly formatted.');
        } else {
          const animal = createNewAnimal(req.body, animals);
          res.json(animal);
        }
      });

    //PUSH


    //DELEte




}
