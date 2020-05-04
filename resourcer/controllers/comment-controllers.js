
const CommentSchema = require('../../models/comment');

const CommentService = require('../services/comment-service')
const MyCommentService = new CommentService();


//POST METHODS
module.exports = class CommentController {

    async saveComment(req, res, next) {
        try {
            const id= req.params.id;
            const comment = req.body
            comment.user = req.user._id;

            const newComment = await MyCommentService.saveComment(id, comment);
            res.status(200).json(newComment); 

        } catch(err) {
            console.log(err);
            res.status(500).send(err)
        } finally {
            next();
        }
    };

    async getComments(req, res, next) {
        try{
            const allComments = await MyCommentService.getComments();
            
            res.status(200).json(allComments);   
        } catch(err) {
            console.log(err);
            res.status(500).send(err)
        } finally {
            next();
        }
    };

    async getComment(req, res, next) {
        try {
            const id= req.params.id;
            const getCommentById = await MyCommentService.getComment(id);
            
            res.status(200).json(getCommentById)
        } catch(err) {
            console.log(err);
            res.status(500).send(err)
        } finally {
            next();
        }
    };


    async updateComment(req, res, next) {
        try{
            const id = req.params.id;
            const coReq = req.body;

            const updateComment = await MyCommentService.updateComment(id, coReq);
 
            if(updateComment !== null){
                res.status(200).json(updateComment);
            } else{
                res.status(404).json({message : 'recurso no encontrado'})
            }
        } catch(err) {
            console.log(err);
            res.status(500).send(err)
        } finally {
            next();
        }
    }

    async deleteComment(req, res, next) {
        try {
            const id = req.params.id;

            const commentDelete = await MyCommentService.deleteComment(id);
            
            if (commentDelete !== null) {
                res.status(200).json(commentDelete);
            } else {
                res.status(404).json({message : 'recurso no encontrado'})
            }
        } catch(err) {
            console.log(err);
            res.status(500).send(err)
        } finally {
            next();
        }
    }

    async MiddelwareGetComment(req) {
        try {
            const id= req;
            const getCommentById = await MyCommentService.getComment(id);
            return getCommentById;
        }catch(err) {
            console.log(err)
        }
    };
}