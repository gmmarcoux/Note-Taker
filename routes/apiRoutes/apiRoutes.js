//Dependencies
const path = require('path');
const fs = require('fs');

//ID
const generateUniqueID = require('generateuniqueid');
const { brotliDecompress } = require('zlib');

//Routes
module.exports = (app) => {

    //GET
    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/bd.json'));
    });

    //POST
    app.post('/api/notes', (req, res) => {
        
        // req.body is where incoming content goes
        //set params for unique ID
        const currentNote = {
            title: req.body.title,
            text: req.body.text,
            id: generateUniqueID ({
                useLetters: true,
                useNumbers: true,
                length: 7,
            })
        };

        //PUSH
        db.push(currentNote);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
        res.json(db);
        });

        //DELETE & UPDATE notes by their ID
    app.delete('/api/notes/:id', (req, res) => {
        //identifying notes and removal
        let db = JSON.parse(fs.readFileSync('db/db.json'))
        let deleteNote = db.filter(item => item.id!== req.params.id);

        //updating deletion
            fs.writeFileSync('db/db.JSON', JSON.stringify(deleteNote));
            res.json(deleteNote);
    });
};
