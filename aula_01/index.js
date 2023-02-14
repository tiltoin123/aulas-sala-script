const express = require("express")
const app = express();
const port = 8080;

app.listen(port);

console.log("funciona")

app.get('/', function (req, res) {
    res.send('GET request to the homepage');
  });