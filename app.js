//let oneEuroIs = {
   // "JPY": 127.9, // japan yen
    //"USD": 1.2, // us dollar
    //"GBP": 0.8, // british pound
    
//}
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;

}
 

 const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 127.9;
    return valueInYen;

}
const fronPoundToDollar = function(valueInDollar){
let valueInPound = valueInDollar * 0.8;
return valueInPound;
} 

 const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.8;
    return valueInPound;

}
 module.exports = {fromYenToPound,fromEuroToDollar,fromDollarToYen}
