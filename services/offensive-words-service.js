const OffensiveRepository = require('../repositories/offensive-word-repository')
const MyOffensiveRepository = new OffensiveRepository(); 

module.exports = class PostService {

    async saveOffensiveWord(req, res) {
        const saveOffensiveWord = await MyOffensiveRepository.saveOffensiveWord(req, res);
        res.json(saveOffensiveWord); 
    };

    async getOffensiveWords(req, res) {
        const getOffensiveWords = await MyOffensiveRepository.getOffensiveWords(req, res);
        res.json(getOffensiveWords);
    }

    async getOffensiveWord(req, res) {
        const getOffensiveWord = await MyOffensiveRepository.getOffensiveWord(req, res);
        res.json(getOffensiveWord);
    };

    async updateOffensiveWord(req, res) {
        const updateOffensiveWord = await MyOffensiveRepository.updateOffensiveWord(req, res);
        res.json(updateOffensiveWord);
    };
    
    async deleteOffensiveWord(req, res) {
        const deleteOffensiveWord = await MyOffensiveRepository.deleteOffensiveWord(req, res);
        res.json(deleteOffensiveWord); 

    }
}