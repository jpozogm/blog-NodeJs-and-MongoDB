const UserRepository = require('../resourcer/repositories/user-repository');
const myUserRepository = new UserRepository();
const AdminList = require('../data/adminList.json')



module.exports = class checkAdminsOnLoad {
    constructor(){}

    async checkAdmins(){

        try {
            const admins = await myUserRepository.getUsers();
            const adminsDDBB = admins.length;

            if (admins.length === 0) {

                myUserRepository.saveUser(AdminList[0]);
                myUserRepository.saveUser(AdminList[1]);
                myUserRepository.saveUser(AdminList[2]);
                myUserRepository.saveUser(AdminList[3]);
                
                return "'Admin users success'"
            };
            return `there are already ${adminsDDBB} users saved in DDBB`

        } catch (err) {
            console.log("error creating admin users", err);
        }
    }
}

