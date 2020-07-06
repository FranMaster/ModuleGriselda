var express = require('express')
var bodyParser = require('body-parser')
var navigation = require('./routes/navigation')
var navigation = require('./routes/user')
var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/nav', navigation);
app.use('/user', navigation);
module.exports = app;
