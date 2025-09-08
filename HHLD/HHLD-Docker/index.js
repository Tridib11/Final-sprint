const x = require('./server')
 const express = require('express');
 const app = express();
 const port = 2000;
 x();
 // Define a route
 app.get('/user', (req, res) => {
 res.send('Congratulations HHLD Folks!');
 });
 // Start the server
 app.listen(port, () => {
 console.log(`Server is listening at http://localhost:${port}`);
 });