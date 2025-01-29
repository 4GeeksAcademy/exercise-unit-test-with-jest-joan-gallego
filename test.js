// Dolares
test("Un euro es 1,04 USD", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.04 dólares, entonces 3.5 euros debe ser (3.5 * 1.04)
    const expected = 3.5 * 1.04;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.64); // 1 euro son 1.04 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.04)
})

// Japan Yen
test("Un Dolar es 155.37 JPY", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const JPY = fromDollarToYen(3.5);

    // Si 1 Dolar son 155.37 JPY, entonces 3.5 Dolares debe ser (3.5 * 155.37)
    const expected = 3.5 * 155.37;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(543.7950000000001); // 1 Dolar son 155.37 JPY, entonces 3.5 Dolares deberían ser = (3.5 * 155.37)
})

// British Pound
test("Un euro es 0.84 GBP", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(3.5);

    // Si 1 JPY son 0.84 GBP, entonces 3.5 JPY debe ser (3.5 * 0.84)
    const expected = 3.5 * 0.0052;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(3.5)).toBe(0.0182); // 1 JPY son 0.87 GBP, entonces 3.5 JPY deberían ser = (3.5 * 0.84)
})