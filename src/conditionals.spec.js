import Condicionales from './conditionals.js'

let conditionals; 

beforeEach(() => {
    conditionals = new Condicionales();
});


describe ('IF condicionales', () => {
    test ('if conditional > 0', () => {
        //given
        const case1 = -1;
        const expected = "número menor que cero";
        //when
        const result = conditionals.ifConditionals(case1);
        //then
        expect(result).toBe(expected)
    }) 
})

describe ('IF condicionales', () => {
    test ('if conditional > 0', () => {
        //given
        const case1 = 20;
        const expected = "b";
        //when
        const result = conditionals.switch(case1);
        //then
        expect(result).toBe(expected)
    }) 
})


