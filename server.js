//Dependencies
const express = require('express');

//Environment variable for Heroku
const PORT = process.env.PORT || 3001;

//Express App
const app = express();


//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Route files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes.js');

//Start server
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

