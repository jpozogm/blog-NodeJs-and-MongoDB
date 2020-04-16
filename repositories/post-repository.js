const PostSchema = require ('../models/post');

module.exports = class PostRepository {

    async savePost(req, res) {

        const post = req.body

        if (typeof post.postAuthorName != "string" || typeof post.postAuthorNickName != 'string'
           || typeof post.postTittle != "string" || typeof post.postContent != "string" ) {
            res.sendStatus(400);
        } else {
            //create object
            const newPost = new PostSchema ({
                postAuthorName: post.postAuthorName,
                postAuthorNickName: post.postAuthorNickName,
                postTittle: post.postTittle,
                postContent: post.postContent,
            });
    
            //save resource
            await newPost.save(); 
    
            //Return new resource
            res.json(newPost); 
        }
    };

    async getPosts(req, res) {
        const allPosts = await PostSchema.find().exec(); 
        res.json(allPosts); 
    }

    async getPost(req, res) {
        const id= req.params.id;
        const po= await PostSchema.findById(id); 
    
        if(!po) {
            res.sendStatus(404);
        } else {
            res.json(po); 
        }
    };

    async updatePost(req, res) {
        const id = req.params.id;
    const po= await PostSchema.findById(id); 

    if(!po){
        res.sendStatus(404);
    } else {
        const poReq = req.body;


        //validation
        if (typeof poReq.postAuthorName != "string" || typeof poReq.postAuthorNickName != "string" 
        || typeof poReq.postTittle != "string" || typeof poReq.postContent != "string") {
            res.sendStatus(404);

        } else {
            //update fields in model

                po.postAuthorName = poReq.postAuthorName;
                po.postAuthorNickName = poReq.postAuthorNickName;
                po.postTittle = poReq.postTittle;
                po.postContent = poReq.postContent;
            
            //upgrate resource
            let postSave = await po.save() 

            //return update resource
            res.json(postSave);
        }
    }
    };
    
    async deletePost(req, res) {
        const id = req.params.id;
        const po = await PostSchema.findById(id); 

        if(!po) {
            res.sendStatus(404);
        } else {
            const PostDelete = await PostSchema.findByIdAndDelete(id); 
            res.json(PostDelete); 
        }
    }

}