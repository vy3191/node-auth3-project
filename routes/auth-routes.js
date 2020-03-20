const express = require('express');
const brcypt = require('bcryptjs');
const router = express.Router();
const userModal = require('../modals/user-modal');
const verifyUserInput = require('../middleware/verifyUserInput');


router.post('/register',  verifyUserInput, (req,res,next) => {
      try{
        const user = userModal.findBy({req.body.username}).first();
        if(user) res.status(409).json({msg:'User already exists'});
        
      }catch(err){
        next(err);
      }
});


router.post('/login', (req,res,next) => {
  try{

  }catch(err){
     next(err);
  }
});


module.exports = router;