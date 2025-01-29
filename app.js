// Un euro es:
let oneEuroIs = {
    "JPY": 161.52, // japan yen
    "USD": 1.04, // us dollar
    "GBP": 0.84, // british pound
}


const oneEuroInDollars = 1.04;
const oneDollarInYen = 155.37;
const oneYenInPounds = 0.0052;


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