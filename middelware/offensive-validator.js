const checkOffensive = require ('../validators/check-offensive');

const offensiveWordRepository = require ('../resourcer/repositories/offensive-word-repository')
const myoffensiveWordRepository = new offensiveWordRepository()


module.exports = class OffensiveValidator {
    constructor(){}

    async OffensiveWordsValidator (req, res, next ){
        console.log('**** req.body ****', req.body)

        const comment = req.body;
        const offensiveWordsDB = await myoffensiveWordRepository.getOffensiveWords();


        if (comment.postContent) {
            const offensiveWordsOnPostFound = await checkOffensive.checkWordsOnComments(comment.postContent, offensiveWordsDB)
        
            if ( offensiveWordsOnPostFound && offensiveWordsOnPostFound.length === 0) {
                next()
            } else {
                res.status(403).json({message: "no puedes usar: " + offensiveWordsOnPostFound})
            }
        }
       
        if (comment.commentContent) {
        
            const offensiveWordsOnCommentFound = await checkOffensive.checkWordsOnComments(comment.commentContent, offensiveWordsDB)

            if ( offensiveWordsOnCommentFound && offensiveWordsOnCommentFound.length === 0) {
                next()
            } else {
                res.status(403).json({message: "no puedes usar: " + offensiveWordsOnCommentFound})
            }
        }
    }
}