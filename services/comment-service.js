const CommentRepository = require('../repositories/comment-repository')
const MyCommentRepository = new CommentRepository(); 

module.exports = class PostService {

    async saveComment(id, comment) {
        const newComment = await MyCommentRepository.saveComment(id, comment);
        return newComment; 
    };

    async getComments() {
        const allComments = await MyCommentRepository.getComments();
         return allComments;
    }

    async getComment(id) {
        const getCommentById = await MyCommentRepository.getComment(id);
        return getCommentById;
    };

    async updateComment(id, coReq) {
        const updateComment = await MyCommentRepository.updateComment(id, coReq);
        return updateComment;
    }

    async deleteComment(id) {
        const commentDelete = await MyCommentRepository.deleteComment(id);
        return commentDelete; 
        
    }
}