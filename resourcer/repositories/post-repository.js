
const PostSchema = require ('../../models/post');

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
        try{
            const allPosts = await PostSchema.find({}).populate('postComments').select({__v:0})
            return allPosts; 
        } catch(err) {
            console.log(err);
        }
    }

    async getPost(id) {
        try {
        return await PostSchema.findById(id).populate('postComments'); 
        } catch (err){
            console.log(err);
            return err.message;
        }
    };

    async updatePost(id, poReq, userById, postById) {


        const postId = postById.user; //postUserId
        const userId = userById.id; // id usuario logado
        const userRole = userById.role

        try {

            if(postId == userId || userRole === "admin") {

                const modifyPost = await PostSchema.findByIdAndUpdate(id, poReq, {new:true}) 

                return modifyPost;
            } else {
                return "El usuario logado no tiene estos derechos";
            }
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