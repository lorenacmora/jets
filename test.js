const { fromDollarToYen, fromEuroToDollar,fromYenToPound } = require('./app.js')

test("One euro should be 1.206 dollars", function () {
    // importo la funcion desde app.js
    let resultado = 1.2 * 1.2
    // hago mi comparacion (la prueba)
    expect(resultado).toBe(1.44); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 127.9 yen", function () {
    // importo la funcion desde app.js
     let total = 1.2 * 0.8
    // hago mi comparacion (la prueba)
    expect(total).toBe(0.96);
})

test("one yen should be 0.8 pound", function(){
    let total = fromYenToPound(10)
    expect(total).toBe(8)
})
