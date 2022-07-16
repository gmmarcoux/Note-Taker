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
    app.post('/api/notes', (req, res) => {
        
       // req.body is where incoming content goes
        const currentNote = {
            title: req.body.title,
            text: req.body.text,
            id: generateUniqueID ({
                useLetters: true,
                useNumbers: true,
                length: 15,
            })
        };

        //PUSH
        db.push(currentNote);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
        res.json(db);
      });

    //DELETE
      app.get('/api/notes/:id', function(req, res) {
          res.json(notes[req.params.id]);
      });

};
