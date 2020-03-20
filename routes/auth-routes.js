const express = require('express');
const brcypt = require('bcryptjs');
const router = express.Router();
const userModal = require('../modals/user-modal');
const verifyUserInput = require('../middleware/verifyUserInput');


router.post('/register',verifyUserInput, async (req,res,next) => {
      try{
        const { username, password, department } = req.body;

        if(!username) res.status(400).json({msg:'User name is missing'});
        if(!password) res.status(400).json({msg: 'Password is missing'});
        if(!department) res.status(400).json({msg:'Department is missing'});
        if(!req.body) res.status(400).json({msg: 'Please enter all the fields'});

        const user = await userModal.findBy({username}).first();
        if(user) res.status(409).json({msg:'User already exists'});

        const newUser = await userModal.add({username,password,department});
        if(newUser) res.status(201).json(newUser);

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