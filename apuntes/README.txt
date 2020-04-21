creo archivo config.js

1- he refactorizado el flujo controller - service - repository

como verás las constantes las defino en controlles y se pasan como argumento al service..
service y repository tienen sólo return, el res.json lo tiene el controlles únicamente.

2- creado el validador de palabras y el middelware, middelware que va en el router