var express = require('express');
var navigation=express.Router();

navigation.get('/',(req,res)=>{
    res.status(200).json({mensaje:'Funciona'})
});

module.exports=navigation