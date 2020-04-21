const CommentSchema = require ('../models/comment');
const PostSchema = require ('../models/post');

module.exports = class CommentRepository {

    async saveComment(req, res) {
        try {
            const id= req.params.id;
            const comment = req.body

            if (typeof comment.commentAuthorNickName != "string" || typeof comment.commentContent != 'string') {
                res.sendStatus(400);
            } else {

                const postasign = await PostSchema.findById(id)
                console.log("postasign")
                console.log(postasign)

                //create object
                const newComment = new CommentSchema ({
                    commentAuthorNickName: comment.commentAuthorNickName,
                    commentContent: comment.commentContent,
                    commentsPostId: postasign._id,
                });

                //save resource
                await newComment.save(); 
                console.log(newComment.commentsPostId)

                //asignar el comentario al post y guardarlo
                await postasign.postComments.push(newComment)
                await postasign.save();

                //Return new resource
                return newComment; 
            }
        } catch (err) {
            console.log(err.message)
            return err.message
        }
    };

    async getComments(req, res) {
        try {
            const allComments = await CommentSchema.find().exec(); 
            res.json(allComments);
        } catch (err) {
            console.log(err.message)
            return err.message
        }

    };
    async getComment(req, res) {

    try {
        const id= req.params.id;
        const co= await CommentSchema.findById(id); 
        
    
        if(!co) {
            res.sendStatus(404);
        } else {
            return co; 
        }
    } catch (err) {
        console.log(err.message)
        return err.message
    }
    };
    async updateComment(req, res) {
        try {
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
        } catch (err) {
            console.log(err.message)
            return err.message
        }
    };
    async deleteComment(req, res) {
        try {   
            const id = req.params.id;
            const co = await CommentSchema.findById(id); 

            if(!co) {
                res.sendStatus(404);
            } else {
                const CommentDelete = await CommentSchema.findByIdAndDelete(id); 
                res.json(CommentDelete); 
            }
        } catch (err) {
            console.log(err.message)
            return err.message
        }
    }
}