

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const isPalindrome = require('./script');

app.use(express.static(__dirname))

app.post('/palindromechecker',(req, res) => {
  const str = req.body.str
  const answer = isPalindrome(str) 
  res.send({message:answer})
})

module.exports = app;