const PostSchema = require('../models/post');

const PostService = require('../services/post-service')
const MyPostService = new PostService();
 
module.exports = class PostController {

    async savePost(req, res) {
        const post = req.body;
        post.user = req.user._id; //incluyo el user:user id al crear el post

        const newPost = await MyPostService.savePost(post);
        res.json(newPost); 
    };

    async getPosts(req, res) {
        const allPosts = await MyPostService.getPosts();
        res.json(allPosts);
    };

    async getPost(req, res) {
        const id= req.params.id;
        const getPostById = await MyPostService.getPost(id);
        res.json(getPostById);
    };

    async updatePost(req, res) { //id del user loggued

        const id = req.params.id;
        const poReq = req.body;

        const updatePost = await MyPostService.updatePost(id, poReq);
        res.json(updatePost);
    }

    async deletePost(req, res) {
        const id = req.params.id;
        const postDelete = await MyPostService.deletePost(id);
        res.json(postDelete); 
    }
}