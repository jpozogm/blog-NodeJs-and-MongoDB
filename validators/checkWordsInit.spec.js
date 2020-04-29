const checkwordsInit = require('./checkWordsInit');
const mycheckwordsInit = new checkwordsInit();


describe ('checking if there are admin users', () => {

    it('there are admin users at the init', async () => {
        let checkingWords = await mycheckwordsInit.checkOWordsOnLoad();
        expect(checkingWords.length).toBeGreaterThan(0);
    });
});