//ROUTES
const express = require('express');



const passport= require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const basicAuth = require('../middelware/BasicAuth');
const verify = basicAuth.verify;
passport.use(new BasicStrategy(verify));


const PostCtrl = require('../controllers/post-contollers')
const myPostCtrl = new PostCtrl();

const CommentCtrl = require('../controllers/comment-contollers')
const myCommentCtrl = new CommentCtrl();

const OffensiveWordCtrl = require('../controllers/offensive-words-contollers')
const myOffensiveWordCtrl = new OffensiveWordCtrl();

const OffensiveValidator = require('../middelware/offensive-validator');
const myOffensiveValidator = new OffensiveValidator();

const UserCtrl = require('../controllers/user-contollers'); 
const myUserCtrl = new UserCtrl;

const api = express.Router();

api.use(passport.initialize());

api.post('/posts', passport.authenticate('basic', {session:false}), myPostCtrl.savePost); // *
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

api.post('/user', myUserCtrl.saveUser);
api.get('/user', myUserCtrl.getUsers);
api.get('/user/:id', myUserCtrl.getUserById);
api.get('/userbyName', myUserCtrl.getUserByName);
api.delete('/user/:id', myUserCtrl.deleteUser);
api.put('/user/:id', myUserCtrl.updateUser); 



module.exports = api;




/*
el basic es porque la estrategis se llama así.
session: false - es para cookies de sesión. En API REST se recomienda false.
*/