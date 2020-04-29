const OffensiveService = require('../services/offensive-words-service')
const MyOffensiveService = new OffensiveService();


//POST METHODS
module.exports = class OffensiveWordController {

    async saveOffensiveWord(req, res, next) {
        try {
            const offWord = req.body
            const newOffensiveWord = await MyOffensiveService.saveOffensiveWord(offWord);
            res.status(200).json(newOffensiveWord); 
        } catch(err) {
            console.log(err);
            res.status(500).send(err)
        } finally {
            next();
        }
    };

    async getOffensiveWords(req, res, next) {
        try {
            const allOffensiveWords = await MyOffensiveService.getOffensiveWords(req, res);
            res.status(200).json(allOffensiveWords);
        } catch(err) {
            console.log(err);
            res.status(500).send(err)
        } finally {
            next();
        }
    }

    async getOffensiveWord(req, res, next) {
        try {
            const getOffensiveWord = await MyOffensiveService.getOffensiveWord(req, res);
            res.status(200).json(getOffensiveWord);
        } catch(err) {
            console.log(err);
            res.status(500).send(err)
        } finally {
            next();
        }
    };

    async updateOffensiveWord(req, res, next) {
        try {
            const updateOffensiveWord = await MyOffensiveService.updateOffensiveWord(req, res);
            
            if(updateOffensiveWord !== null) {
                res.status(200).json(updateOffensiveWord);
            }else {
                res.status(404).json({message : 'recurso no encontrado'})
            }
        } catch(err) {
            console.log(err);
            res.status(500).send(err)
        } finally {
            next();
        }
    };
    
    async deleteOffensiveWord(req, res, next) {
        try {
            const deleteOffensiveWord = await MyOffensiveService.deleteOffensiveWord(req, res);
            
            if(deleteOffensiveWord !== null) {
            res.status(200).json(deleteOffensiveWord); 
            }else{
                res.status(404).json({message : 'recurso no encontrado'})
            }
        } catch(err) {
            console.log(err);
            res.status(500).send(err)
        } finally {
            next();
        }
    }

    async FunctionGetOffensiveWords(req, res) {
        try {
            const allOffensiveWords = await MyOffensiveService.getOffensiveWords(req, res);
        return allOffensiveWords;
        } catch(err) {
            console.log(err)
        }
    }

    async FunctionSaveOffensiveWord(req, res) {
        try{
            const offWord = req.body
            const newOffensiveWord = await MyOffensiveService.saveOffensiveWord(offWord);
            return newOffensiveWord; 
        } catch(err) {
            console.log(err)
        }
    };
}