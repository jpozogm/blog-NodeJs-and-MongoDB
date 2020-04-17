export function contadorLetras(texto, letra) {
    let count = 0;
    for (let item of texto) {
      if (item === letra) {
        count++;
      }
    }
    dummyFunction();
    
    return count;
  }
  
export function dummyFunction(){
    return 'Soy una función tonta';
  }
