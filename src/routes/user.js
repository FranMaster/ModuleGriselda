var express = require('express');
const userConstroller=require('../controller/userController')
var users=express.Router();

navigation.get('/add',userConstroller.addUser);

module.exports=navigation