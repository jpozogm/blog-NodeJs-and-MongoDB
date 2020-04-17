const CommentSchema = require ('../models/comment');

module.exports = class CommentRepository {

    async saveComment(req, res) {

        const comment = req.body

        if (typeof comment.commentAuthorNickName != "string" || typeof comment.commentContent != 'string') {
            res.sendStatus(400);
        } else {
            //create object
            const newComment = new CommentSchema ({
                commentAuthorNickName: comment.commentAuthorNickName,
                commentContent: comment.commentContent,
            });
    
            //save resource
            await newComment.save(); 
    
            //Return new resource
            res.json(newComment); 
        }
    };
    async getComments(req, res) {
        const allComments = await CommentSchema.find().exec(); 
        res.json(allComments);
    };
    async getComment(req, res) {
        const id= req.params.id;
        const co= await CommentSchema.findById(id); 
    
        if(!co) {
            res.sendStatus(404);
        } else {
            res.json(co); 
        }
    };
    async updateComment(req, res) {
        const id = req.params.id;
    const co = await CommentSchema.findById(id); 

    if(!co){
        res.sendStatus(404);
    } else {
        const coReq = req.body;

        //validation
        if (typeof coReq.commentAuthorNickName != "string" || typeof coReq.commentContent != "string") {
            res.sendStatus(404);

        } else {
            //update fields in model
                co.commentAuthorNickName = coReq.commentAuthorNickName;
                co.commentContent = coReq.commentContent;
            
            //upgrate resource
            let commentSave = await co.save() 

            //return update resource
            res.json(commentSave);
        }
    }
    };
    async deleteComment(req, res) {
        const id = req.params.id;
        const co = await CommentSchema.findById(id); 

        if(!co) {
            res.sendStatus(404);
        } else {
            const CommentDelete = await CommentSchema.findByIdAndDelete(id); 
            res.json(CommentDelete); 
        }
    }
}