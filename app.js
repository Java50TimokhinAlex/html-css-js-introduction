// const ar = [];
// const ar1 = [1,2,3,4]
// ar.push(...ar1); //spread  потрошит  массив на элементы
// ar.push('abc');

function getRandomNumber(min, max) {
  min = Math.trunc(min);
  max = Math.trunc(max);
  return min + Math.random() * (max - min);
}