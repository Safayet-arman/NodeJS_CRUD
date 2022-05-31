const express = require("express");
const router = express.Router();

router.get("/",(req,res,next)=>{
    res.status(200).json({
        message: "get Request"
    });
})
router.post("/",(req,res,next)=>{
    res.status(201).json({
        message: "post Request"
    });
});

module.exports = router;