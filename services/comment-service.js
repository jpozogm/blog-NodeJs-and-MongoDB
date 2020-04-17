const CommentRepository = require('../repositories/comment-repository')
const MyCommentRepository = new CommentRepository(); 

module.exports = class PostService {

    async saveComment(req, res) {
        const newComment = await MyCommentRepository.saveComment(req, res);
        res.json(newComment); 
    };

    async getComments(req, res) {
        const allComments = await MyCommentRepository.getComments(req, res);
        res.json(allComments);
    }

    async getComment(req, res) {
        const getCommentById = await MyCommentRepository.getComment(req, res);
        res.json(getCommentById);
    };


    async updateComment(req, res) {
        const updateComment = await MyCommentRepository.updateComment(req, res);
        res.json(updateComment);
    }

    async deleteComment(req, res) {
        const commentDelete = await MyCommentRepository.deleteComment(req, res);
        res.json(commentDelete); 
        
    }
}