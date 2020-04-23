const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const UserSchema = Schema({

    user: {
        type: String,
        require: true,
    },
        
    password: {
        type: String,
        minlength:1,
        require: true,
    }, 
},
{
    timestamps: true
}
);

module.exports = mongoose.model("user", UserSchema);

