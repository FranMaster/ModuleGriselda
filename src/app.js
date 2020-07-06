var express = require('express')
var bodyParser = require('body-parser') 
var navigation=require('./routes/navigation')
var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) 
app.use('/nav',navigation);
module.exports=app;
