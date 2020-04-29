const PostRepository = require('../repositories/post-repository')
const MyPostRepository = new PostRepository(); 

const UserRepository = require('../repositories/user-repository')
const MyUserRepository = new UserRepository();

module.exports = class PostService {

    async savePost(post) {
        const newPost = await MyPostRepository.savePost(post);
        return(newPost); 
    };

    async getPosts() {
        const allPosts = await MyPostRepository.getPosts();
        return allPosts;
    }

    async getPost(id) {
        const getPostById = await MyPostRepository.getPost(id);
        return getPostById;
    };

    async updatePost(id, poReq, userId) {
        const getUserById = await MyUserRepository.getUserById(userId);
        const getPostById = await MyPostRepository.getPost(id);
        const updatePost = await MyPostRepository.updatePost(id, poReq, getUserById, getPostById);
        return updatePost;
    }

    async deletePost(id) {
        const postDelete = await MyPostRepository.deletePost(id);
        return postDelete; 
    }
}