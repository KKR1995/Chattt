const express = require('express')
const app  = express.router();

app.get('/', function (req, res) {
    res.send('GET request to the homepage')
  })

module.export=router;