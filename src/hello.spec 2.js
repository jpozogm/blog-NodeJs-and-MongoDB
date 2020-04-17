import { hello } from './hello.js' // como hemos metido ESC6 se importa así

describe('my first suite', () => {  // defines conjunto casos de test

    it("hello world", () => {
        expect(hello()).toBe("hello")
    })
}) 