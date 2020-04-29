module.exports = class Condicionales {

    ifConditionals(num) {

        if(num <0 ) {
            return "número menor que cero"
        }

        if(num === 0 ) {
            return "número igual que cero"
        }

        if(num >0 ) {
            return "número mayor que cero"
        }
    }

    switch(num){
        switch (num) {
        
        case 18:
        case 19:
        case 20:
            return "a"
        
        case 21:
        case 22:
        case 23:
            return "b"
        
        default:
            return "c";
        }
    }
}

