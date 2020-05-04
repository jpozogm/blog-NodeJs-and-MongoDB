const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const PostSchema = Schema({

    postAuthorName: {
        type: String,
        required: true,
    },
        
    postAuthorNickName: {
        type: String,
        required: true,
    },

    posttitle: {
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
});

module.exports = mongoose.model("post", PostSchema);


