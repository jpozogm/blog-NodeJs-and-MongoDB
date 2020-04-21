const OffensiveWordsIncludes = require('./check-offensive');
const ofensiveWordsList  = ["caca", "culo", "pedo", "pis"];


describe ('validating if comment has oofensive words', () => {

    it('comment with offensive words', async () => {
        let comment = "Esto es comentario caca";
        let offensiveWordChecked = await OffensiveWordsIncludes.checkWordsOnComments(comment, ofensiveWordsList);

        expect(offensiveWordChecked.length).toBe(1);
    });

    it('comment with offensive words', async () => {
        let comment = "Esto es comentario";
        let offensiveWordChecked = await OffensiveWordsIncludes.checkWordsOnComments(comment, ofensiveWordsList);

        expect(offensiveWordChecked.length).toBe(0);
    })
});
