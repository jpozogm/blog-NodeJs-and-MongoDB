class OffensiveWordsIncludes {
    constructor() {}

    async checkWordsOnComments (comment, offensiveWordsList) {

    
        try {
            let notAllowedOffensiveWords = [];
            let offensiveWordsDBlist = [];

            let commentCad = comment.toLowerCase().split(' ');
        

            for (let Offensiveword of offensiveWordsList) {
                offensiveWordsDBlist = [...offensiveWordsDBlist, Offensiveword.word];
            }

        
            commentCad.forEach((word) => {

                const isWordIncluded = new RegExp('\\b' + word + '\\b').test(offensiveWordsDBlist)

                if(isWordIncluded) {
                    notAllowedOffensiveWords = [...notAllowedOffensiveWords, word];
                }
            })

            return notAllowedOffensiveWords
            
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }
}

module.exports = new OffensiveWordsIncludes();
