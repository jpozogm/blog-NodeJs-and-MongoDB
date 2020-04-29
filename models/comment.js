const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const CommentSchema = Schema({
        
    commentAuthorNickName: {
        type: String,
        require: true,
    },

    commentContent: {
        type: String,
        require: true
    },

    commentDate: {
        type: Date,
        default: Date.now,
        require: false
    },

    commentsPostId: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "post"
    }],

    userId : {
        type: String,
    }
});

module.exports = mongoose.model("comments", CommentSchema);

