const PostRepository = require('../repositories/post-repository')
const MyPostRepository = new PostRepository(); 

const UserRepository = require('../repositories/user-repository')
const MyUserRepository = new UserRepository();

module.exports = class PostService {

    async savePost(post) {
        try {
            const newPost = await MyPostRepository.savePost(post);
            return(newPost); 
        } catch(err) {
            console.log(err);
        }
    };

    async getPosts() {
        try{
            const allPosts = await MyPostRepository.getPosts();
            return allPosts;
        } catch(err) {
            console.log(err);
        }
    }

    async getPost(id) {
        try{
            const getPostById = await MyPostRepository.getPost(id);
            return getPostById;
        } catch(err) {
            console.log(err);
        }
    };

    async updatePost(id, poReq, userId) {
        try{
            const getUserById = await MyUserRepository.getUserById(userId);
            const getPostById = await MyPostRepository.getPost(id);
            const updatePost = await MyPostRepository.updatePost(id, poReq, getUserById, getPostById);
            return updatePost;
        } catch(err) {
            console.log(err);
        }
    }

    async deletePost(id) {
        try{
            const postDelete = await MyPostRepository.deletePost(id);
            return postDelete; 
        } catch(err) {
            console.log(err);
        }
    }
}