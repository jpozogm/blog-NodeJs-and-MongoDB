import {array} from "./array.js" 

test ('arrays', ()=>{
    expect(array()).toEqual(expect.any(Array))
})

test ('arrays', ()=>{
    expect(array()).toHaveLength(4)
})

test ('arrays', ()=>{
    expect(array()).toContain(1)
})

test ('arrays', ()=>{
    expect(array()).toEqual(expect.arrayContaining([1,2,3,4]))
})
