const userCtrl = require("../resourcer/controllers/user-controllers");
const myUserCtrl = new userCtrl();

class CheckJwtAuth{
    constructor() {}

    async verifyToken(payload, done){

        const user = await myUserCtrl.CheckUserByName(payload.body.user);
        
        if (user){
            return done(null, user, payload); 
        } else {
            return done(null, false, {message: "User not found"});
        }
    };
}
module.exports = new CheckJwtAuth();