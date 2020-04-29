const UserRepository = require('../repositories/user-repository')
const MyUserRepository = new UserRepository(); 

module.exports = class UserService {

    async saveUser(user) {
        try {
            const newUser = await MyUserRepository.saveUser(user);
            return(newUser); 
        } catch(err) {
            console.log(err);
        }
    };

    async getUsers() {
        try{
            const allUsers = await MyUserRepository.getUsers();
            return allUsers;
        } catch(err) {
            console.log(err);
        }
    }

    async getUserById(id) {
        try{
            const getUserById = await MyUserRepository.getUserById(id);
            return getUserById;
        } catch(err) {
            console.log(err);
        }
    };

    async getUserByName(username) {
        try{
            const getUserByName = await MyUserRepository.getUserByName(username);
            return getUserByName;
        } catch(err) {
            console.log(err);
        }
    };

    async CheckUserByName(username) {
        try{
            const getUserByName = await MyUserRepository.CheckUserByName(username);
            return getUserByName;
        } catch(err) {
            console.log(err);
        }
    };

    async updateUser(id, usReq) {
        try{
            const updateUser = await MyUserRepository.updateUser(id, usReq);
            return updateUser;
        } catch(err) {
            console.log(err);
        }
    }

    async deleteUser(id) {
        try{
            const deleteUser = await MyUserRepository.deleteUser(id);
            return deleteUser; 
        } catch(err) {
            console.log(err);
        }
    }
}