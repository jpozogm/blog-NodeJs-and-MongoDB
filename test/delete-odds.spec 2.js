import { deleteOdds } from './delete-odds.js'

describe('Delete Odds', () => {
 
    it ("test Delete Odds function", () => {
        const case1 = [1,2,3,4,5,6,7,8];
        const expected = [2,4,6,8];

        //Then
        expect(deleteOdds(case1)).toEqual(expected);
    })
})



