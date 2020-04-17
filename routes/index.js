//ROUTES
const express = require('express');

const PostCtrl = require('../controllers/post-contollers')
const myPostCtrl = new PostCtrl();

const CommentCtrl = require('../controllers/comment-contollers')
const myCommentCtrl = new CommentCtrl();


const api = express.Router();

api.post('/posts', myPostCtrl.savePost);
api.get('/posts', myPostCtrl.getPosts);
api.get('/posts/:id', myPostCtrl.getPost);
api.delete('/posts/:id', myPostCtrl.deletePost);
api.put('/posts/:id', myPostCtrl.updatePost); 

api.post('/comments', myCommentCtrl.saveComment);
api.get('/comments', myCommentCtrl.getComments);
api.get('/comments/:id', myCommentCtrl.getComment);
api.delete('/comments/:id', myCommentCtrl.deleteComment);
api.put('/comments/:id', myCommentCtrl.updateComment); 

module.exports = api;