const OffensiveWordController = require('../resourcer/controllers/offensive-words-contollers');
const myOffensiveWordsController = new OffensiveWordController();
const OwList = require('../data/owList.json')


module.exports = class checkOWordsOnLoad {
    constructor(){}

    async checkOWordsOnLoad(){

        try{
            const ow = await myOffensiveWordsController.FunctionGetOffensiveWords();
            const owDDBB = ow.length;

            if (ow.length === 0) {

                myOffensiveWordsController.FunctionSaveOffensiveWord(OwList[0]);
                myOffensiveWordsController.FunctionSaveOffensiveWord(OwList[1]);
                myOffensiveWordsController.FunctionSaveOffensiveWord(OwList[2]);
                myOffensiveWordsController.FunctionSaveOffensiveWord(OwList[3]);
                
                return "'Populate offensive words success'"
            };
            return `there are already ${owDDBB} offensive words saved in DDBB`
                
            } catch (err) {
            console.log("error creating offensive words", err);
        }
    }
}

