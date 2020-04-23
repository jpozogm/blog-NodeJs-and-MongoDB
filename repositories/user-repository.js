
const UserSchema = require ('../models/user');
const bcrypt = require ('bcrypt')

module.exports = class UserRepository {
    async saveUser(user) {
        try {
            const passwordHash = await bcrypt.hash(user.password, bcrypt.genSaltSync(8), null);

            const newUser = new UserSchema ({
                user: user.user,
                password: passwordHash,
            });
        
            //save resource
            await newUser.save(); 
        
            //Return new resource
            return newUser; 

        } catch (err) {
            console.log(err.message)
            return err.message
        }
    };

    async getUsers() {
        const allUsers = await UserSchema.find({}).select({__v:0}) 
        return allUsers; 
    }

    async getUserById(id) {
        try {
        return await UserSchema.findById(id); 
        } catch (err){
            console.log(err);
            return err.message;
        }
    };

    async getUserByName(username) {
    
        console.log(typeof username)
        try {
        return await UserSchema.findOne({user : username}); 
        } catch (err){
            console.log(err);
            return err.message;
        }
    };

    async CheckUserByName(username) {
  
        try {
        return await UserSchema.findOne({user : username}); 
        } catch (err){
            console.log(err);
            return err.message;
        } 
    };


    async updateUser(id, usReq) {
        try {
        const us= await UserSchema.findById(id); 

                us.user = usReq.user;
                us.password = usReq.password;

            //upgrate resource
            let userSave = await us.save() 

            //return update resource
            return userSave;
        } catch (err){
            console.log(err);
            return err.message;
        }
    };
    
    async deleteUser(id) {
        try {
            //const po = await UserSchema.findById(id); 
            const UserDelete = await UserSchema.findByIdAndDelete(id); 
            return UserDelete; 
        } catch (err){
            console.log(err);
            return err.message;
        }
    }
}