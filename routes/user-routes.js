const express = require('express');
const router = express.Router();
const restrict = require('../middleware/restrict');
const userModal = require('../modals/user-modal');

router.get("/",restrict, async (req,res,next) => {
    try{
      console.log('token>>>>>', req.token);
      const users = await userModal.find();
      if(users) {
         res.status(200).json(users);
      }
    }catch(err) {
      next(err);
    }
});

module.exports = router;

