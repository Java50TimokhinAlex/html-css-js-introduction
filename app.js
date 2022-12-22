

// let num = 12345;
// let str = String(num);
// let sum1 = 0;
// for (let digit of str)
// {
//   sum1 += Number(digit);
// }
// console.log(sum1);



function getDigitsSum(number) {
   
    let sum = 0;

    while(number > 0) {
        sum += number % 10;
        number = number / 10;
        number = Math.floor(number);
    }
    return sum;
}
console.log(getDigitsSum(1234))




let res = "A" + "AS" / 1 + "AS";
let str1 = res;
str1 = str1.toLowerCase();
console.log(str1);



function getDigitsRev(n) {
  let rev = "";
  if (n < 0) {
      rev += "-";
      n *= -1;
  }
  let number = Math.floor(n);
 

  while(number > 0) {
      rev += number % 10;
      number = number / 10;
      number = Math.floor(number);
  }
  return rev;
}
console.log(getDigitsRev(-987654321))



function computeExpression(expressionStr) {
  return console.log(eval(expressionStr));
}
console.log(eval(9000 / ((10 + 20) ** 2)))








