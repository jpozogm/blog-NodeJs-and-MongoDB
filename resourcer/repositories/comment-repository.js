const CommentSchema = require ('../../models/comment');
const PostSchema = require ('../../models/post');

module.exports = class CommentRepository {

    async saveComment(id, comment) {
        try {
                const postasign = await PostSchema.findById(id)

                //create object
                const newComment = new CommentSchema ({
                    commentAuthorNickName: comment.commentAuthorNickName,
                    commentContent: comment.commentContent,
                    commentsPostId: postasign._id,
                    userId : comment.user,
                });

                //save resource
                await newComment.save(); 

                //asignar el comentario al post y guardarlo
                await postasign.postComments.push(newComment)
                await postasign.save();

                //Return new resource
                return newComment; 

        } catch (err) {
            console.log(err.message)
            return err.message
        }
    };

    async getComments() {
        try {
            const allComments = await CommentSchema.find().exec(); 
            return allComments;
        } catch (err) {
            console.log(err.message)
            return err.message
        }

    };

    async getComment(id) {
        try {
            const co= await CommentSchema.findById(id); 
            return co; 

        } catch (err) {
            console.log(err.message)
            return err.message
        }
    };
    
    async updateComment(id, coReq) {
        try {
            const commentSave = await CommentSchema.findByIdAndUpdate(id, coReq, {new:true}); 

            return commentSave;

        } catch (err) {
            console.log(err.message)
            return err.message
        }
    };
    async deleteComment(id) {
        try {   
            const CommentDelete = await CommentSchema.findByIdAndDelete(id); 
            return CommentDelete; 
    
        } catch (err) {
            console.log(err.message)
            return err.message
        }
    }
}