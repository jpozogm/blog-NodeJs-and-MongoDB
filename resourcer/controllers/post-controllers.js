const PostSchema = require('../../models/post');
const jwt = require("jsonwebtoken");

const PostService = require('../services/post-service')
const MyPostService = new PostService();
 
module.exports = class PostController {

    async savePost(req, res, next) {
        try {
            const post = req.body;
            post.user = req.user._id; //incluyo el user:user id al crear el post

            const newPost = await MyPostService.savePost(post);
            res.status(200).json(newPost); 
        } catch(err) {
            console.log(err);
            res.status(500).send(err)
        } finally{
            next()
        }
    };

    async getPosts(req, res, next) {

        try{
            const allPosts = await MyPostService.getPosts();
            res.status(200).json(allPosts);
        } catch(err) {
            console.log(err);
            res.status(500).send(err)
        } finally {
            next();
        }
    };

    async getPost(req, res, next) {
        try{
            const id= req.params.id;
            const getPostById = await MyPostService.getPost(id);
            res.status(200).json(getPostById);
        } catch(err) {
            console.log(err);
            res.status(500).send(err)
        } finally {
            next();
        }
    };

    async updatePost(req, res, next) { 
        try{
            const userId = req.user._id; //id user loggued
            const id = req.params.id;
            const poReq = req.body;

            const updatePost = await MyPostService.updatePost(id, poReq, userId);

            if(updatePost !== null) {
                res.status(200).json(updatePost);
            } else {
                res.status(404).json({message : 'recurso no encontrado'})
            }
        } catch(err) {
            console.log(err);
            res.status(err.code).send(err) //mensaje que me llega desde el servicio
        } finally {
            next();
        }
    }

    async deletePost(req, res, next) {
        try {
            const id = req.params.id;
            const postDelete = await MyPostService.deletePost(id);

            if(postDelete !== null) {
                res.status(200).json(postDelete);
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
    
    async MiddelwareGetPost(req) {
        try {
            const id= req;
            const getPostById = await MyPostService.getPost(id);
            return getPostById; 
        } catch(err) {
            console.log(err)
        }
    };
}