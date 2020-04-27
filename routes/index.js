//ROUTES
const express = require('express');
const config = require ('../config').SECRET_KEY;
const jwt = require("jsonwebtoken");

const passport= require('passport');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
const BasicStrategy = require('passport-http').BasicStrategy;
const basicAuth = require('../middelware/BasicAuth');
passport.use(new BasicStrategy(basicAuth.verify));


const jwtOps = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config
}

const jwtAuth = require("../middelware/jwtAuth");
const verifyToken = jwtAuth.verifyToken;
passport.use(new JwtStrategy(jwtOps, verifyToken))


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

api.post('/posts', passport.authenticate('jwt', {session:false}), myPostCtrl.savePost); // *
api.get('/posts', myPostCtrl.getPosts);
api.get('/posts/:id', myPostCtrl.getPost);
api.delete('/posts/:id', passport.authenticate('jwt', {session:false}), myPostCtrl.deletePost);
api.put('/posts/:id', passport.authenticate('jwt', {session:false}), myPostCtrl.updatePost); 

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

api.post("/login", passport.authenticate('basic', {session: false}), (req, res) =>{
    const body = {_id : req.user_id, user : req.user.user}
    const token = jwt.sign({body}, config);

    return res.status(200).json({message: "Auth Passed", token});
})

module.exports = api;


