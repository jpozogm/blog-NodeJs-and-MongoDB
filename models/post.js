const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const PostSchema = Schema({

    postAuthorName: {
        type: String,
        required: false,
    },
        
    postAuthorNickName: {
        type: String,
        required: false,
    },

    postTittle: {
        type: String, 
        default: "Hello World",
        required: true
    },

    postContent: {
        type: String,
        required: true
    },

    postComments: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "comments"
    }],

    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "users",
        required: true
    },
    
    postDate: {
        type: Date,
        default: Date.now,
        require: false
    },
});

module.exports = mongoose.model("post", PostSchema);


