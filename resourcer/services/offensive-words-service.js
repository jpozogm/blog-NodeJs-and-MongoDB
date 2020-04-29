const OffensiveRepository = require('../repositories/offensive-word-repository')
const MyOffensiveRepository = new OffensiveRepository(); 

module.exports = class PostService {

    async saveOffensiveWord(offWord) {
        try{
            const saveOffensiveWord = await MyOffensiveRepository.saveOffensiveWord(offWord);
            return saveOffensiveWord; 
        } catch(err) {
            console.log(err);
        }
    };

    async getOffensiveWords(req, res) {
        try{
            const getOffensiveWords = await MyOffensiveRepository.getOffensiveWords(req, res);
            return getOffensiveWords;
        } catch(err) {
            console.log(err);
        }
    }

    async getOffensiveWord(req, res) {
        try{
            const getOffensiveWord = await MyOffensiveRepository.getOffensiveWord(req, res);
            res.json(getOffensiveWord);
        } catch(err) {
            console.log(err);
        }
    };

    async updateOffensiveWord(req, res) {
        try{
            const updateOffensiveWord = await MyOffensiveRepository.updateOffensiveWord(req, res);
            res.json(updateOffensiveWord);
        } catch(err) {
            console.log(err);
        }
    };
    
    async deleteOffensiveWord(req, res) {
        try{
            const deleteOffensiveWord = await MyOffensiveRepository.deleteOffensiveWord(req, res);
            res.json(deleteOffensiveWord); 
        } catch(err) {
            console.log(err);
        }
    }
}