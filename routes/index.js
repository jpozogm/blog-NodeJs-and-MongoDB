//ROUTES
const express = require('express');
const PostCtrl = require('../controllers/post-contollers')
const myPostCtrl = new PostCtrl();

const api = express.Router();

api.post('/posts', myPostCtrl.savePost);
api.get('/posts', myPostCtrl.getPosts);
api.get('/posts/:id', myPostCtrl.getPost);
api.delete('/posts/:id', myPostCtrl.deletePost);
api.put('/posts/:id', myPostCtrl.updatePost); 

module.exports = api;