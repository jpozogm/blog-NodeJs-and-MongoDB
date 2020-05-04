const OffensiveWordRepository = require('../resourcer/repositories/offensive-word-repository');
const myOffensiveWordRepository = new OffensiveWordRepository();
const OwList = require('../data/owList.json')


module.exports = class checkOWordsOnLoad {
    constructor(){}

    async checkOWordsOnLoad(){

        try{
            const ow = await myOffensiveWordRepository.getOffensiveWords();
            const owDDBB = ow.length;

            if (ow.length === 0) {

                myOffensiveWordRepository.saveOffensiveWord(OwList[0]);
                myOffensiveWordRepository.saveOffensiveWord(OwList[1]);
                myOffensiveWordRepository.saveOffensiveWord(OwList[2]);
                myOffensiveWordRepository.saveOffensiveWord(OwList[3]);
                
                return "'Populate offensive words success'"
            };
            return `there are already ${owDDBB} offensive words saved in DDBB`
                
            } catch (err) {
            console.log("error creating offensive words", err);
        }
    }
}

