const UserController = require('../controllers/user-contollers');
const myUserController = new UserController();
const AdminList = require('../data/adminList.json')



module.exports = class checkAdminsOnLoad {
    constructor(){}

    async checkAdmins(){

        try {
            const admins = await myUserController.FunctiongetUsers();
            const adminsDDBB = admins.length;

            if (admins.length === 0) {

                myUserController.FunctionSaveUser(AdminList[0]);
                myUserController.FunctionSaveUser(AdminList[1]);
                myUserController.FunctionSaveUser(AdminList[2]);
                myUserController.FunctionSaveUser(AdminList[3]);
                
                return "'Admin users success'"
            };
            return `there are already ${adminsDDBB} users saved in DDBB`

        } catch (err) {
            console.log("error creating admin users", err);
        }
    }
}

