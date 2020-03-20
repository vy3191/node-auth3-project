const express = require('express');
const router = express.Router();
const userModal = require('../modals/user-modal');

router.get("/", async (req,res,next) => {
    try{
      const users = await userModal.find();
      if(users) {
         res.status(200).json(users);
      }
    }catch(err) {
      next(err);
    }
});

module.exports = router;

