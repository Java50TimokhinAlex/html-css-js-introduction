function coloringString(str1, str2)
{
    let ar1 = Array.from(str1);
    let ar2 = Array.from(str2);
    if (ar1.length!=ar2.length) {
      console.log("Error");
    }
    const res = ar2.map(function (number, index)
    {
        if  (ar2[index] === ar1[index]) {
          return"green";
        }
        else if (ar1.indexOf(number) != index && ar1.indexOf(number) > 0 ) {
          return "yellow";
        }
        else  {return "red";}
    })
    return res;
}
console.log(coloringString ("pappy", "apple"))

// ____________________________________________________________________________


function getNumbersWithDigitsAmount(digitsAmount, array)
{
let numbersOfDigits = digitsAmount;
const res = array.filter(function (number)
{
    if (number < 0) {
      number = number * -1;}
      number = String(number);
    if (number.length === numbersOfDigits)
    return +(number);
});
return res;
}
console.log(getNumbersWithDigitsAmount(3, [5,100,-100,25,1000,-32,22,16,-17,250, -666]))