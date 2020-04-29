const CommentRepository = require('../repositories/comment-repository')
const MyCommentRepository = new CommentRepository(); 

module.exports = class PostService {

    async saveComment(id, comment) {
        try {
            const newComment = await MyCommentRepository.saveComment(id, comment);
            return newComment; 
        } catch(err) {
            console.log(err);
        }
    };

    async getComments() {
        try {
            const allComments = await MyCommentRepository.getComments();
            return allComments;
        } catch(err) {
            console.log(err);
        }
    }

    async getComment(id) {
        try {
            const getCommentById = await MyCommentRepository.getComment(id);
            return getCommentById;
        } catch(err) {
            console.log(err);
        }
    };

    async updateComment(id, coReq) {
        try {
            const updateComment = await MyCommentRepository.updateComment(id, coReq);
            return updateComment;
        } catch(err) {
            console.log(err);
        }
    }

    async deleteComment(id) {
        try{
            const commentDelete = await MyCommentRepository.deleteComment(id);
            return commentDelete;     
        } catch(err) {
            console.log(err);
        }
    }
}