import {some, find, isCountry } from './find.js'


test ('some',() =>{

  let param1 = [6,7,8,9]
  expect(some(param1)).toEqual(true)
})

test ('find',() =>{
    let param1 = [6,7,8,9]
    expect(find(param1)).toEqual(6)
  })

test ('IsCountry',() =>{
    let param1 = [
        {name: "Francia", isCountry: true},
        {name: "Benidor", isCountry: false},
        {name: "Alegete", isCountry: false},
    ]

    expect(isCountry(param1)).toBe("Benidor")
})