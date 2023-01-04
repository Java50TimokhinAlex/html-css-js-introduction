const array =  [10, 20, 30, -10, 11, 100];
array.splice(2, 2);
console.log(array.join("."))

 const index = array.indexOf(30);

//  delete 
// (removing all numbers from 30)
const res = array.splice(index, 10)
array.splice(index, array.length, -1000);

// insert
array.splice(index, 0, -10, -20);

// replace
array.splice(index, 2, 20);
const ar11 = [40, 200];
array.splice(index, 1, ...ar11)

const numbersPerPage = 2;
const page = 2;
const firstIndex = (page - 1) * numbersPerPage;
const lastIndex = firstIndex + numbersPerPage;
const pageNumbers = array.slice(firstIndex, lastIndex)

// __________________________________________________

const ar1 = array.map(multiply2);
function multiply2(numbers) {
  return numbers * 2;
}

const ar2 = array.map(function(number, index)
{
  return index + 1 + ". " + number;
});

const ar3 = array.map(function(number) {
  return `<li>${number}</li>`
})
const ulElement = `<ul>${ar3.join('')}</ul>`

// __________________________________________________
const min = 2;
const max = 15;
const ar4 = array.filter(function(number) {
  return number >= min && number <= max;
})

const ar5 = array.filter(function(__, index) {
  return index % 2 === 0;
})