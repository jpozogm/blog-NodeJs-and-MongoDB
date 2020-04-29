const checkOffensive = require ('../validators/check-offensive');

const offensiveWordRepository = require ('../repositories/offensive-word-repository')
const myoffensiveWordRepository = new offensiveWordRepository()


module.exports = class OffensiveValidator {
    constructor(){}

    async OffensiveWordsValidator (req, res, next ){

        const comment = req.body;
        const offensiveWordsDB = await myoffensiveWordRepository.getOffensiveWords();


        const offensiveWordsFound = await checkOffensive.checkWordsOnComments(comment.commentContent, offensiveWordsDB)


        if (offensiveWordsFound.length === 0) {
            next()
        } else {
            res.status(403).json({message: "no puedes usar: " + offensiveWordsFound})
        }
    }
}