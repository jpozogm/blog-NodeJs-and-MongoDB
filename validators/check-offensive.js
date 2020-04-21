class OffensiveWordsIncludes {
    constructor() {}

    async checkWordsOnComments (comment, offensiveWordsList) {
        try {
            let notAllowedOffensiveWords = [];
            let commentCad = comment.toLowerCase().split(' ');

            commentCad.forEach((word) => {
                const isWordIncluded = new RegExp(word).test(offensiveWordsList)

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
