const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");


const Student = require('../routes/models/student');

router.get('/', (req, res, next) => {
    Student.find()
    .exec()
    .then(result => res.status(200).json(result))             
        .catch(err => res.status(500).json(err)) 
    
})

router.post('/',( req, res, next)=> {
  
    const info ={                              
      
          _id : mongoose.Types.ObjectId(),                       
          name: req.body.name,
          batch: req.body.batch                              
                            
        }
        const student = new Student(info);       
        student.save()                                         
        .then(result => res.status(200).json(result))             
        .catch(err => res.status(500).json(err))                 
   
   
    });
        
        module.exports = router;