//Dependencies
const express = require('express');
const path = require('path');

//Express App
const PORT = process.env.PORT || 3001;
const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Route files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//Start server
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
