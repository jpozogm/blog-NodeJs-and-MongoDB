const PostSchema = require('../models/post');

const PostService = require('../services/post-service')
const MyPostService = new PostService();
 
module.exports = class PostController {

    async savePost(req, res) {
        const newPost = await MyPostService.savePost(req, res);
        res.json(newPost); 
    };

    async getPosts(req, res) {
        const allPosts = await MyPostService.getPosts(req, res);
        res.json(allPosts);
    };

    async getPost(req, res) {
        const getPostById = await MyPostService.getPost(req, res);
        res.json(getPostById);
    };

    async updatePost(req, res) {
        const updatePost = await MyPostService.updatePost(req, res);
        res.json(updatePost);
    }

    async deletePost(req, res) {
        const postDelete = await MyPostService.deletePost(req, res);
        res.json(postDelete); 
    }
}