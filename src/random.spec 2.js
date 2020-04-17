import {random} from "./random.js";

it('random numbers', ()=>{
    const result = [1,2,3,4,5,6,7,8,9,10];

    expect(random()).toStrictEqual(result);
})