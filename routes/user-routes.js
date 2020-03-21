const express = require('express');
const router = express.Router();
const restrict = require('../middleware/restrict');
const department = require('../middleware/department');
const userModal = require('../modals/user-modal');

router.get("/",restrict,department, async (req,res,next) => {
    try{
      // console.log('token>>>>>', req.token);
      const users = await userModal.find();
      if(users) {
        //  res.status(200).json(users);
        const sameDepartmentUsers = users.filter(user => {
             if(user.department == req.department) {
                return user;
             }
        } );
        res.status(200).json(sameDepartmentUsers);
      }
    }catch(err) {
      next(err);
    }
});

module.exports = router;

