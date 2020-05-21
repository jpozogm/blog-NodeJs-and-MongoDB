const UserController = require ('../resourcer/controllers/user-controllers')
const MyUserController = new UserController();
const UserRepository = require ('../resourcer/repositories/user-repository')
const MyUserRepository = new UserRepository();
const PostController = require ('../resourcer/controllers/post-controllers')
const MyPostController = new PostController();
const CommentController = require('../resourcer/controllers/comment-controllers')
const MyCommentController = new CommentController();


class isAdmin {
    constructor(){}

    async isAdmin(req, res, next) {
        try {

            const userId = req.user.id; //id user loggued
            const getUserById = await MyUserRepository.getUserById(userId);
            const userRole = getUserById.role;

            return (userRole === "admin") ? next() : res.status(403).json({message: "el usuario no tiene derechos"});;

        } catch (err){
        console.log(err);
        return err.message;        
        }
    }

    async isAdminOrLoggued(req, res, next) {
        try {
            const userId = req.user.id; //id user loggued

            const getUserById = await MyUserRepository.getUserById(userId);
            const userRole = getUserById.role;



            return ( userId || userRole === "admin") ? next() : res.status(403).json({message: "el usuario no tiene derechos"});;

        } catch (err){
        console.log(err);
        return err.message;        
        }
    }

    async isLoggedOrAdminPost(req, res, next) {

        try {
            const userId = req.user.id; //id user loggued
            const id = req.params.id;
    
            const getUserById = await MyUserController.MiddelwareUserById(userId);
            const getPostById = await MyPostController.MiddelwareGetPost(id);

            if(getUserById && getPostById ) {

                const postId = getPostById.user;
                const userById = getUserById.id;
                const userRole = getUserById.role;

                if(postId == userById || userRole === "admin"){
                    next();
                } else {
                    res.status(403).json({message: "el usuario no tiene derechos"});
                }
            }  else {
                res.status(403).json({message: "El post no existe"});
            }
        } catch (err){
        console.log(err);
        return err.message;        
        }
    } 


    async isLoggedOrAdminComment(req, res, next) {

    try {
        const userId = req.user.id; 
        const id = req.params.id; 

        const getUserById = await MyUserController.MiddelwareUserById(userId);
        const getCommentById = await MyCommentController.MiddelwareGetComment(id);
        

         if(getUserById && getCommentById ) {

            const commenttId = getCommentById.userId;
            const userById = getUserById.id;
            const userRole = getUserById.role;

            if(commenttId == userById || userRole === "admin"){
                next();
            } else {
                res.status(403).json({message: "el usuario no tiene derechos"});
            }
        }  else {
            res.status(403).json({message: "El comentario no existe"});
        } 
        } catch (err){
            console.log(err);
            return err.message;        
        } 
    } 


}
module.exports = new isAdmin();