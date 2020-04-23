const UserController = require ('../controllers/user-contollers')
const myUserController = new UserController();


class BasicAuth {
    constructor(){}

    async verify(username, password, done) {
 
        const getUser = await myUserController.CheckUserByName(username);

        if ( getUser != null && username == getUser.user && password == getUser.password) { 
            return done(null, { username, password });
        } else {
            return done(null, false, { message: 'Incorrect username or password' });
        }
    }  
}

module.exports = new BasicAuth();