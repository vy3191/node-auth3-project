const userModal = require('../modals/user-modal');

async function department(req,res,next) {
    const { userId } = req.token;
    console.log('userID',userId);
    const user = await userModal.findById(userId);
    // console.log('user>>>>', user);
    // console.log('department user', user);
    req.department = user.department;
    next();
};

module.exports = department;