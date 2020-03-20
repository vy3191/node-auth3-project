
function verifyUserInput(req,res,next) {
   const { username, password, department } = req.body;
   if(!username) res.status(400).json({msg:'User name is missing'});
   if(!password) res.status(400).json({msg: 'Password is missing'});
   if(!department) res.status(400).json({msg:'Department is missing'});
   if(!req.body) res.status(400).json({msg: 'Please enter all the fields'});
   req.username = username;
   next();
}

module.exports = router;