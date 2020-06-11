const CommentSchema = require ('../../models/comment');
const PostSchema = require ('../../models/post');

module.exports = class CommentRepository {

    async saveComment(id, comment) {

        console.log("id", id) //id post
        console.log("comment", comment)

         try {
            const getPost = await PostSchema.findById(id)
            console.log("getPost", getPost)

            //create object
            const newComment = new CommentSchema ({
                commentAuthorNickName: comment.commentAuthorNickName,
                commentContent: comment.commentContent,
                commentsPostId: getPost._id,
                userId : comment.user,
            });

            console.log("newComment", newComment)
            //save resource
            await newComment.save(); 

            //asignar el comentario al post y guardarlo
            await getPost.postComments.push(newComment)
            await getPost.save();

            //Return new resource
            return newComment; 


        } catch (err) {
            console.log(err.message)
            return err.message
        } 

  /*       try {
            const newComment = new CommentSchema(comment);
            await newComment.save();
            await PostSchema.findByIdAndUpdate(id, {
              $push: { postComments: newComment },
            });
            return newComment;

        } catch (err) {
            console.log(err.message)
            return err.message
        } */
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