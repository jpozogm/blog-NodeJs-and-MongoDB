//ROUTES
const express = require('express');

const PostCtrl = require('../controllers/post-contollers')
const myPostCtrl = new PostCtrl();

const CommentCtrl = require('../controllers/comment-contollers')
const myCommentCtrl = new CommentCtrl();

const OffensiveWordCtrl = require('../controllers/offensive-words-contollers')
const myOffensiveWordCtrl = new OffensiveWordCtrl();

const OffensiveValidator = require('../middelware/offensive-validator');
const myOffensiveValidator = new OffensiveValidator();

const api = express.Router();

api.post('/posts', myPostCtrl.savePost);
api.get('/posts', myPostCtrl.getPosts);
api.get('/posts/:id', myPostCtrl.getPost);
api.delete('/posts/:id', myPostCtrl.deletePost);
api.put('/posts/:id', myPostCtrl.updatePost); 

api.post('/comments/:id',myOffensiveValidator.OffensiveWordsValidator, myCommentCtrl.saveComment);
api.get('/comments', myCommentCtrl.getComments);
api.get('/comments/:id', myCommentCtrl.getComment);
api.delete('/comments/:id', myCommentCtrl.deleteComment);
api.put('/comments/:id', myCommentCtrl.updateComment); 

api.post('/offensivewords', myOffensiveWordCtrl.saveOffensiveWord);
api.get('/offensivewords', myOffensiveWordCtrl.getOffensiveWords);
api.get('/offensivewords/:id', myOffensiveWordCtrl.getOffensiveWord);
api.delete('/offensivewords/:id', myOffensiveWordCtrl.deleteOffensiveWord);
api.put('/offensivewords/:id', myOffensiveWordCtrl.updateOffensiveWord); 

module.exports = api;