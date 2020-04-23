const UserRepository = require('../repositories/user-repository')
const MyUserRepository = new UserRepository(); 

module.exports = class UserService {

    async saveUser(user) {
        const newUser = await MyUserRepository.saveUser(user);
        return(newUser); 
    };

    async getUsers() {
        const allUsers = await MyUserRepository.getUsers();
        return allUsers;
    }

    async getUserById(id) {
        const getUserById = await MyUserRepository.getUserById(id);
        return getUserById;
    };

    async getUserByName(username) {
        const getUserByName = await MyUserRepository.getUserByName(username);
        return getUserByName;
    };

    async CheckUserByName(username) {
        
        const getUserByName = await MyUserRepository.CheckUserByName(username);
        return getUserByName;
    };

    async updateUser(id, usReq) {
        const updateUser = await MyUserRepository.updateUser(id, usReq);
        return updateUser;
    }

    async deleteUser(id) {
        const deleteUser = await MyUserRepository.deleteUser(id);
        return deleteUser; 
    }
}