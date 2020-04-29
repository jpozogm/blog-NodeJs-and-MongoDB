class OffensiveWordsIncludes {
    constructor() {}

    async checkWordsOnComments (comment, offensiveWordsList) {

        console.log("++++offensiveWordsList", offensiveWordsList)
        console.log("++++comment", comment)
        try {
            let notAllowedOffensiveWords = [];
            let offensiveWordsDBlist = [];

            let commentCad = comment.toLowerCase().split(' ');

            for (let Offensiveword of offensiveWordsList) {
                offensiveWordsDBlist = [...offensiveWordsDBlist, Offensiveword.word];
            }

            commentCad.forEach((word) => {
                const isWordIncluded = new RegExp(word).test(offensiveWordsDBlist)

                console.log("++++isWordIncluded", isWordIncluded)

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
