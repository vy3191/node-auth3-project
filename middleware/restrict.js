const jwt = require("jsonwebtoken");

function restrict(req,res,next) {
   const { token } = req.cookies;
   console.log('token', token);
   if(!token) res.status(401).json({msg:'You shall not pass!'});

   jwt.verify(token, process.env.JWT_KEY, (err,decode) => {
       if(err) res.status(401).json({msg:'You shall not pass!'});
       req.token = decode;
       next();
   })
};

module.exports = restrict;