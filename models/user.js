const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const UserSchema = Schema({

    user: {
        type: String,
        required: true,
    },
        
    password: {
        type: String,
        minlength:1,
        required: true,
    }, 

    rol: {
        type: String,
        default: "publisher",
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("user", UserSchema);

//module.exports = mongoose.model("user", UserSchema, "user");