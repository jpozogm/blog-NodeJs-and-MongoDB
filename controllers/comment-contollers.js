const CommentSchema = require('../models/comment');

const CommentService = require('../services/comment-service')
const MyCommentService = new CommentService();


//POST METHODS
module.exports = class CommentController {

    async saveComment(req, res) {
        const newComment = await MyCommentService.saveComment(req, res);
        res.json(newComment); 
    };

    async getComments(req, res) {
        const allComments = await MyCommentService.getComments(req, res);
        res.json(allComments);
    };

    async getComment(req, res) {
        const getCommentById = await MyCommentService.getComment(req, res);
        res.json(getCommentById);
    };

    async updateComment(req, res) {
        const updateComment = await MyCommentService.updateComment(req, res);
        res.json(updateComment);
    }

    async deleteComment(req, res) {
        const commentDelete = await MyCommentService.deleteComment(req, res);
        res.json(commentDelete); 
    }
}