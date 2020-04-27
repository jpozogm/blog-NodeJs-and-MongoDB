
const PostSchema = require ('../models/post');

module.exports = class PostRepository {

    async savePost(post) {
        try {
                const newPost = new PostSchema ({
                    postAuthorName: post.postAuthorName,
                    postAuthorNickName: post.postAuthorNickName,
                    postTittle: post.postTittle,
                    postContent: post.postContent,
                    user: post.user,
                });
        
                //save resource
                await newPost.save(); 
        
                //Return new resource
                return newPost; 

        } catch (err) {
            console.log(err.message)
            return err.message
        }
    };

    async getPosts() {
        const allPosts = await PostSchema.find({}).populate('postComments').select({__v:0}) //.select({__v:0}); select indicas qué campos no quieres que te devuelve la BBDD, si pones nombre no te devuelve el nombre
        return allPosts; 
    }

    async getPost(id) {
        try {
        return await PostSchema.findById(id).populate('postComments'); 
        } catch (err){
            console.log(err);
            return err.message;
        }
    };

    async updatePost(id, poReq) {
        try {
        const po= await PostSchema.findById(id); 

                po.postAuthorName = poReq.postAuthorName;
                po.postAuthorNickName = poReq.postAuthorNickName;
                po.postTittle = poReq.postTittle;
                po.postContent = poReq.postContent;
            
            //upgrate resource
            let postSave = await po.save() 

            //return update resource
            return postSave;
        } catch (err){
            console.log(err);
            return err.message;
        }
    };
    
    async deletePost(id) {
        try {
            const po = await PostSchema.findById(id); 
            const PostDelete = await PostSchema.findByIdAndDelete(id); 
            return PostDelete; 
        } catch (err){
            console.log(err);
            return err.message;
        }
    }

}