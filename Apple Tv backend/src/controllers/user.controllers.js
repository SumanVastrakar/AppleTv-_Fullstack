const express = require("express");
const User = require("../models/users.model");

const router = express.Router();

router.get("/", async(req,res)=>{
    try{
        const users= await User.find().lean().exec();
        return res.status(201).send(users);
    }catch(err){
        res.status(500).send({message:err.message})
    }
  
});

router.post("/", async(req,res)=>{
    try{
const users= await User.create(req.body)
return res.status(201).send(users);
    }catch(err){
        res.status(500).send({message:err.message})
    }
  
})
module.exports=router;