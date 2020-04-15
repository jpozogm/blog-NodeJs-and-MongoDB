export function deleteOdds(arr) {
    return arr.filter(item => item % 2 === 0)
}


/* export function deleteOdds(arr) {
    let pares = [];
    for (let item of arr) {
        if(item % 2 === 0) {
            pares = [...pares, item]
        }
    }
    return pares;
} */