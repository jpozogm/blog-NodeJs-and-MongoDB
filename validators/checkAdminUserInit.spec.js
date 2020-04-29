const checkAdminUserInit = require('./checkAdminUserInit');
const mycheckAdminUserInit = new checkAdminUserInit();


describe ('checking if there are admin users', () => {

    it('there are admin users at the init', async () => {
        let checkingAdminUsers = await mycheckAdminUserInit.checkAdmins();
        expect(checkingAdminUsers.length).toBeGreaterThan(0);
    });
});