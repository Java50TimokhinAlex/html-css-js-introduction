function createEmployee(id, name, birthYear, salary, city, country) {
  return {id, name, birthYear, salary, adress: {city, country}}
}
const employees = [
  createEmployee(123, "Vasya", 2000, 15000, "Lod", "israel"),
  createEmployee(124, "David", 1975, 15500, "Tel Aviv", "israel"),
  createEmployee(125, "Sarah", 1985, 20000, "New York", "USA"),
  createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
  createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "israel"),
  createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Georgia"),
  createEmployee(129, "Sasha", 2000, 25000, "Ramat Gan", "israel"),
  createEmployee(130, "Victor", 2003, 10000, "Arad", "israel")
]

function getEmployee(employees, id) {
    const person = employees.find(function(empl) {
        return empl.id ===id
    });
    return person;
}
console.log(getEmployee(employees, 130))

function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
  const empl = employees.filter(function(person){
    if(person.salary >= salaryFrom && person.salary <=salaryTo)
    return person;
  })
  return empl;
}
console.log(getEmployeesBySalary(employees, 15000, 18000))

function getEmployeeByCity(employees, city) {
    const person = employees.find(function(empl) {
        return empl.adress.city === city
    });
    return person;
}
console.log(getEmployeeByCity(employees, "London"))


________________________________________________________________________________________

function getEmployee(employees, id) {
  return employees.find(empl => empl.id == id);
}
console.log(getEmployee(employees,125))

function getEmployeeBySalary(employees, fromSalary, toSalary) {
  return employees.filter(empl => empl.salary >= fromSalary && empl.salary <= toSalary);
}
console.log(getEmployeeBySalary(employees, 15300, 20000))

function getEmployeeByCity(employees, city) {
  return employees.filter(empl => empl.adress.city === city);
}
console.log(getEmployeeByCity(employees, "Arad"))


function getEmployeeName(employees) { 
  return employees.map(empl => empl.name);
}
 console.log(getEmployeeName(employees))


function sortEmployeeByAge(employees) {
  return employees.sort((empl1, empl2) => empl2.birthYear - empl1.birthYear);
}
console.log(sortEmployeeByAge(employees))

function computeSalary(employees) {
  return employees.reduce((acc, empl) => acc += empl.salary,0);
}
console.log(computeSalary(employees))

// // _______________________________________________________________________________
// let field = "salary";
// console.log(employees[0][field]);
// function displayFieldValye(emploees, index, field) {
//   console.log(emploees[index][field]);
// }
// displayFieldValye(employees, 1, "id");
// employees[0].salary = 20000;
// employees[0].depertment = "QA";
// displayFieldValye(employees, 0, "depertment");
// delete employees[0].depertment;
// displayFieldValye(employees, 0, "depertment");

function computeMinMaxAvSalary(employees){

const res = employees.reduce((res, empl) => {
  if(res.minSalary > empl.salary){
    res.minSalary = empl.salary;
  }else if(res.maxSalary < empl.salary){
    res.maxSalary = empl.salary;
}
  res.avSalary += empl.salary;
  return res;
}, {minSalary: employees[0].salary, maxSalary: employees[0].salary, avSalary: 0});
res.avSalary /= employees.length;
return res;
}

function displayValue(minMaxAv, field) {
  console.log(`value of the field ${field} is ${minMaxAv[field]}`)
};
const minMaxAv = computeMinMaxAvSalary(employees);
displayValue(minMaxAv,"avSalary");
displayValue(minMaxAv,"minSalary");
displayValue(minMaxAv,"maxSalary");


const strings = ["b", "xyz", "lmn", "xyz", "lmn", "xyz", "a"];
// xyz -> 3;
// lmn -> 2;
// a -> 1;
// b -> 1;
function displayStringOccurrences(strings) {
  const stringOccurences = getObjOccurences(strings);
  const arrayOccurences = Object.entries(stringOccurences);
  arrayOccurences.sort(stringComp);
  arrayOccurences.forEach(entry => console.log(`${entry[0]} -> ${entry[1]}`));
}
function getObjOccurences(strings) {
  const res = {};
  strings.forEach(str => {
    if(!res[str]) {
      res[str] = 1;
    } else {
      res[str]++;
    }
  })
  return res;
}
function stringComp(entry1, entry2) {
  let res = entry2[1] - entry1[1];
  if (res == 0) {
    res = entry1[0] < entry2[0] ? -1 : 1;
  }
  return res;
}
displayStringOccurrences(strings)



// __________________________________________________________________
// HW #19

function getMostPopulatedCountry(employees) {
  // TODO
  // returns country with most amoun of employess
}
function getMostPopulatedCountries(employees, counter) {
  // TODO
  // return a given number (counter) of countries with most amount of employees
}
function isAnagram(word, anagram) {
  // TODO
  // returns true if a given anagram is indeed an angram of a given word
  // anagram should have the same length as word.
}