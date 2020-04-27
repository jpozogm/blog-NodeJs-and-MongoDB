const PostRepository = require('../repositories/post-repository')
const MyPostRepository = new PostRepository(); 

module.exports = class PostService {

    async savePost(post) {
        const newPost = await MyPostRepository.savePost(post);
        return(newPost); 
    };

    async getPosts() {
        const allPosts = await MyPostRepository.getPosts();
        return allPosts;
    }

    async getPost(id) {
        const getPostById = await MyPostRepository.getPost(id);
        return getPostById;
    };

    async updatePost(id, poReq) {
        //llamada intermedia: base de datos
        //const getPostById = await MyPostRepository.getPost(id);
        const updatePost = await MyPostRepository.updatePost(id, poReq);
        return updatePost;
    }

    async deletePost(id) {
        const postDelete = await MyPostRepository.deletePost(id);
        return postDelete; 
    }
}