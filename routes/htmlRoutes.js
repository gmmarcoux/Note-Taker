//Dependencies
const path = require('path');
const fs = require('fs');


//HTML Routes
module.exports = function (app) {

  //index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

  //notes.html
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
  });
};
