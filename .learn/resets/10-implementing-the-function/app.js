// Un euro es:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const oneEuroInDollars = 1.07;
const oneDollarInYen = 156.5;
const oneYenInPounds = 0.87;


const fromEuroToDollar = (euroAmount) => {
    return euroAmount * oneEuroInDollars;
};

const fromDollarToYen = (dollarAmount) => {
    return dollarAmount * oneDollarInYen;
};

const fromYenToPound = (yenAmount) => {
    return yenAmount * oneYenInPounds;
};

module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};