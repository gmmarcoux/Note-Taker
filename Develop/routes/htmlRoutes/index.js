const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});


router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});