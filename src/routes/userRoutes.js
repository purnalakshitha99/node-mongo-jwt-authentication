const express = require("express");
const router = express.Router();

//admin
router.get("/admin",(req,res)=>{
    res.json({
        message:"Welcome Admin"
    })
});

//manager
router.get("/manager",(req,res)=>{
    res.json({
        message:"Welcome Manager"
    })
})

//user
router.get("/user",(req,res)=>{
    res.json({
        message:"Welcome User"
    })
})