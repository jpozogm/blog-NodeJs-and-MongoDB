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

const isAdmin = require('../middelware/isAdmin')


const PostCtrl = require('../resourcer/controllers/post-controllers')
const myPostCtrl = new PostCtrl();

const CommentCtrl = require('../resourcer/controllers/comment-controllers')
const myCommentCtrl = new CommentCtrl();

const OffensiveWordCtrl = require('../resourcer/controllers/offensive-words-controllers')
const myOffensiveWordCtrl = new OffensiveWordCtrl();

const OffensiveValidator = require('../middelware/offensive-validator');
const myOffensiveValidator = new OffensiveValidator();

const UserCtrl = require('../resourcer/controllers/user-controllers'); 
const myUserCtrl = new UserCtrl;

const api = express.Router();

api.use(passport.initialize());

api.post('/posts', passport.authenticate('jwt', {session:false}), isAdmin.isAdminOrLoggued, myOffensiveValidator.OffensiveWordsValidator, myPostCtrl.savePost); 
api.get('/posts', myPostCtrl.getPosts);
api.get('/posts/:id', myPostCtrl.getPost);
api.delete('/posts/:id', passport.authenticate('jwt', {session:false}),isAdmin.isLoggedOrAdminPost, myPostCtrl.deletePost);
api.put('/posts/:id', passport.authenticate('jwt', {session:false}), isAdmin.isLoggedOrAdminPost, myOffensiveValidator.OffensiveWordsValidator, myPostCtrl.updatePost); 

api.post('/comments/:id',passport.authenticate('jwt', {session:false}), isAdmin.isAdminOrLoggued, myOffensiveValidator.OffensiveWordsValidator, myCommentCtrl.saveComment);
api.get('/comments', myCommentCtrl.getComments);
api.get('/comments/:id', myCommentCtrl.getComment);
api.delete('/comments/:id', passport.authenticate('jwt', {session:false}), isAdmin.isLoggedOrAdminComment, myCommentCtrl.deleteComment);
api.put('/comments/:id', passport.authenticate('jwt', {session:false}), isAdmin.isLoggedOrAdminComment, myOffensiveValidator.OffensiveWordsValidator, myCommentCtrl.updateComment); 

api.post('/offensivewords', passport.authenticate('jwt', {session:false}), isAdmin.isAdmin, myOffensiveWordCtrl.saveOffensiveWord);
api.get('/offensivewords', myOffensiveWordCtrl.getOffensiveWords);
api.get('/offensivewords/:id', myOffensiveWordCtrl.getOffensiveWord);
api.delete('/offensivewords/:id', passport.authenticate('jwt', {session:false}), isAdmin.isAdmin, myOffensiveWordCtrl.deleteOffensiveWord);
api.put('/offensivewords/:id', passport.authenticate('jwt', {session:false}), isAdmin.isAdmin, myOffensiveWordCtrl.updateOffensiveWord); 

api.post('/user', myUserCtrl.saveUser);
api.get('/user', myUserCtrl.getUsers);
api.get('/user/:id', myUserCtrl.getUserById);
api.get('/user/byName/:name', myUserCtrl.getUserByName);
api.delete('/user/:id', myUserCtrl.deleteUser);
api.put('/user/:id', myUserCtrl.updateUser); 

api.post("/login", passport.authenticate('basic', {session: false}), (req, res, next) =>{

        
    const body = {role: req.user.role, _id : req.user._id, user : req.user.user}
    const token = jwt.sign({body}, config);

    res.status(200).json({message: "Auth Passed", token});
    next();
})

module.exports = api;


