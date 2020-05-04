const UserService = require('../services/user-service')
const MyUserService = new UserService();
 
module.exports = class UserController {

    async saveUser(req, res, next) {

        try{
            const user = req.body
            const newUser = await MyUserService.saveUser(user);
            res.status(200).json(newUser); 
        } catch(err) {
            console.log(err);
            res.status(500).send(err)
        } finally {
            next();
        }
    };

    async getUsers(req, res, next) {
        try{
            const allUsers = await MyUserService.getUsers();
            res.status(200).json(allUsers);
        } catch(err) {
            console.log(err);
            res.status(500).send(err)
        } finally {
            next();
        }
    };

    async getUserById(req, res, next) {
        try {
            const id= req.params.id;
            const getUserById = await MyUserService.getUserById(id);
            res.status(200).json(getUserById);
        } catch(err) {
            console.log(err);
            res.status(500).send(err)
        } finally {
            next();
        }
    };

    async getUserByName(req, res, next) {
        try {
            const username= req.body.user;
            const getUserByName = await MyUserService.getUserByName(username);
            res.status(200).json(getUserByName);
        } catch(err) {
            console.log(err);
            res.status(500).send(err)
        } finally {
            next();
        }
    };

    async updateUser(req, res, next) {
        try {
            const id = req.params.id;
            const usReq = req.body;
            const updateUser = await MyUserService.updateUser(id, usReq);
            
            if(updateUser !== null) {
                res.status(200).json(updateUser);
            } else {
                res.status(404).json({message : 'recurso no encontrado'})
            }
        } catch(err) {
            console.log(err);
            res.status(500).send(err)
        } finally {
            next();
        }
    }

    async deleteUser(req, res, next) {
        try {
            const id = req.params.id;
            const userDelete = await MyUserService.deleteUser(id);

            if (userDelete !== null) {
                res.status(200).json(userDelete); 
            } else {
                res.status(404).json({message : 'recurso no encontrado'})
            }
        } catch(err) {
            console.log(err);
            res.status(500).send(err)
        } finally {
            next();
        }
    }

    async CheckUserByName(req, res) {
        const username= req;
        const getUserByName = await MyUserService.CheckUserByName(username);
        return getUserByName;
    };

    async FunctiongetUsers(req, res) {
        try {
            const allUsers = await MyUserService.getUsers();
            return allUsers;
        } catch(err) {
            console.log(err)
        }
    };

    async FunctionSaveUser(req, res) {
        try{
            const user = req.body
            const newUser = await MyUserService.saveUser(user);
            return newUser; 
        } catch(err) {
            console.log(err)
        }
    };

    async MiddelwareUserById(req) {
        try{
            const id= req
            const getUserById = await MyUserService.getUserById(id);
            return getUserById; 
        } catch(err) {
            console.log(err)
        }
    };
}