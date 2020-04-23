const UserService = require('../services/user-service')
const MyUserService = new UserService();
 
module.exports = class UserController {

    async saveUser(req, res) {
        const user = req.body
        const newUser = await MyUserService.saveUser(user);
        res.json(newUser); 
    };

    async getUsers(req, res) {
        const allUsers = await MyUserService.getUsers();
        res.json(allUsers);
    };

    async getUserById(req, res) {
        const id= req.params.id;
        const getUserById = await MyUserService.getUserById(id);
        res.json(getUserById);
    };

    async getUserByName(req, res) {
        const username= req.body.user;
        const getUserByName = await MyUserService.getUserByName(username);
        res.json(getUserByName);
    };

    async CheckUserByName(req, res) {
        const username= req;
        const getUserByName = await MyUserService.CheckUserByName(username);
        return getUserByName;
    };

    async updateUser(req, res) {
        const id = req.params.id;
        const usReq = req.body;
        const updateUser = await MyUserService.updateUser(id, usReq);
        res.json(updateUser);
    }


    async deleteUser(req, res) {
        const id = req.params.id;
        const userDelete = await MyUserService.deleteUser(id);
        res.json(userDelete); 
    }
}