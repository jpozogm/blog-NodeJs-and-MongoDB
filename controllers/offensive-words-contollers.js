const OffensiveWordSchema = require('../models/offensiveWords');

const OffensiveService = require('../services/offensive-words-service')
const MyOffensiveService = new OffensiveService();


//POST METHODS
module.exports = class OffensiveWordController {

    async saveOffensiveWord(req, res) {
        const newOffensiveWord = await MyOffensiveService.saveOffensiveWord(req, res);
        res.json(newOffensiveWord); 
    };

    async getOffensiveWords(req, res) {
        const allOffensiveWords = await MyOffensiveService.getOffensiveWords(req, res);
        res.json(allOffensiveWords);
    }

    async getOffensiveWord(req, res) {
        const getOffensiveWord = await MyOffensiveService.getOffensiveWord(req, res);
        res.json(getOffensiveWord);
    };

    async updateOffensiveWord(req, res) {
        const updateOffensiveWord = await MyOffensiveService.updateOffensiveWord(req, res);
        res.json(updateOffensiveWord);
    };
    
    async deleteOffensiveWord(req, res) {
        const deleteOffensiveWord = await MyOffensiveService.deleteOffensiveWord(req, res);
        res.json(deleteOffensiveWord); 

    }
}