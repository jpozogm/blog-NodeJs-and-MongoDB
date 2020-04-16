const PostRepository = require('../repositories/post-repository')
const MyPostRepository = new PostRepository(); 

module.exports = class PostService {

    async savePost(req, res) {
        const newPost = await MyPostRepository.savePost(req, res);
        res.json(newPost); 
    };

    async getPosts(req, res) {
        const allPosts = await MyPostRepository.getPosts(req, res);
        res.json(allPosts);
    }

    async getPost(req, res) {
        const getPostById = await MyPostRepository.getPost(req, res);
        res.json(getPostById);
    };


    async updatePost(req, res) {
        const updatePost = await MyPostRepository.updatePost(req, res);
        res.json(updatePost);
    }

    async deletePost(req, res) {
        const postDelete = await MyPostRepository.deletePost(req, res);
        res.json(postDelete); 
        
    }
}