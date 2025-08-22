const express = require("express");
const router = express.Router();
const verifyToken = require("./../middleware/authMiddleware.js")
const authorizedRoles = require("./../middleware/authorizedRoles.js")

//Only admin can access this point
router.get("/admin",verifyToken,authorizedRoles("admin"),(req,res)=>{
    res.json({
        message:"Welcome Admin"
    })
});

//Both admin and manager access this route
router.get("/manager",verifyToken,authorizedRoles("admin","manager"),(req,res)=>{
    res.json({
        message:"Welcome Manager"
    })
})

//All can access this router
router.get("/user",verifyToken,authorizedRoles("admin","user"),(req,res)=>{
    res.json({
        message:"Welcome User"
    })
})

module.exports = router;