const express=require('express');
const router=express.Router();
const { body,validationResult } = require('express-validator');

router.get('/test',(req,res)=>{
    res.send('test');
})

router.get('/register',(req,res)=>{
    res.render('register');
})

router.post('/register',(req,res)=>{
    console.log(req.body)
    res.send('Ho gyeee registerrr');
})
module.exports=router;