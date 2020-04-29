const CommentSchema = require('../models/comment');

const CommentService = require('../services/comment-service')
const MyCommentService = new CommentService();


//POST METHODS
module.exports = class CommentController {

    async saveComment(req, res) {
        const id= req.params.id;

        const comment = req.body
        comment.user = req.user._id;

        const newComment = await MyCommentService.saveComment(id, comment);
        res.json(newComment); 
    };

    async getComments(req, res) {
        const allComments = await MyCommentService.getComments();
        res.json(allComments);
    };

    async getComment(req, res) {
        const id= req.params.id;

        const getCommentById = await MyCommentService.getComment(id);
        res.json(getCommentById);
    };


    async updateComment(req, res) {
        const id = req.params.id;
        const coReq = req.body;

        const updateComment = await MyCommentService.updateComment(id, coReq);
        res.json(updateComment);
    }

    async deleteComment(req, res) {
        const id = req.params.id;

        const commentDelete = await MyCommentService.deleteComment(id);
        res.json(commentDelete); 
    }

    async MiddelwareGetComment(req) {
        const id= req;
        const getCommentById = await MyCommentService.getComment(id);
        return getCommentById;
    };
}