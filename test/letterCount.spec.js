import { contadorLetras, dummyFunction } from './letterCount.js'

describe("contador de letras", () => {

    it("verficar funcionamiento", () => {
        let resultado = contadorLetras("esto es una frase", "a");
        expect(resultado).toBe(2)
    })

    it("verficar FALLO en funcionamiento", () => {
        
        let param1 = "esto es una frase";
        let param2 = "a";
        
        let resultado = contadorLetras(param1, param2);
        
        expect(resultado).toBe(3)
    })

    it("verificar que la longitud del primer parámetro de letterCount no sea mayor que 10", () => {

        let param1 = "esto es una frase";
        let param2= param1.split("").filter(item => item != " ").length;
        let param3 = "a"

        expect(contadorLetras(param1, param3)).toBeLessThan(10)
    })

    it("verificar que la función dummyFunction() es llamada", () => {

        const getArguments = jest.fn(); // es un objeto y tienes muchos metrodos

        getArguments.mockReturnValue("esto es una frase");

        let gestorArgumentos = new getArguments;


        expect(dummyFunction()).toBeCalled()

    })

    it("verificar que dummyFunction contiene 'tonta' en lo que devuelve", () => {

        expect(dummyFunction()).toMatch("tonta")

    })

    it("verificar que el numero de argumentos pasados a letterCount sean 2", () => {

    })
})