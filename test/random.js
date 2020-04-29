export function random() {

    let number = [];
    let count = 0;

    while (number.length < 10) {
        let element = Math.floor(Math.random() * 10) + 1;
        number.includes(element) ? count++ : number.push(element);
        number.sort(function(a,b){
            return a - b;
        });
    }
    return number
}