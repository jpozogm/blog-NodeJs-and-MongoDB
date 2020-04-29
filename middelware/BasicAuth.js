const UserController = require ('../resourcer/controllers/user-contollers')
const myUserController = new UserController();
const config = require ("../config");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


class BasicAuth {
    constructor(){}

    async verify(username, password, done) {
 
        const user = await myUserController.CheckUserByName(username);

        if (!user) {
            return done(null, false, { message: 'User not found'});
        }
        if (await bcrypt.compare(password, user.password)) { 
            return done(null, user);
        } else {
            return done(null, false, { message: 'Incorrect username or password' });
        }
    }  
}
module.exports = new BasicAuth();