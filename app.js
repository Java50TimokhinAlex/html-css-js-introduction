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

// function getEmployee(employees, id) {
//     const person = employees.find(function(empl) {
//         return empl.id ===id
//     });
//     return person;
// }
// console.log(getEmployee(employees, 130))

// function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
//   const empl = employees.filter(function(person){
//     if(person.salary >= salaryFrom && person.salary <=salaryTo)
//     return person;
//   })
//   return empl;
// }
// console.log(getEmployeesBySalary(employees, 15000, 18000))

// function getEmployeeByCity(employees, city) {
//     const person = employees.find(function(empl) {
//         return empl.adress.city === city
//     });
//     return person;
// }
// console.log(getEmployeeByCity(employees, "London"))


// ________________________________________________________________________________________

function getEmployee(employees, id) {
  return employees.find(empl => empl.id == id);
}
console.log(getEmployee(employees,125))

function getEmployeeBySalary(employees, fromSalary, toSalary) {
  return employees.filter(empl => empl.salary >= fromSalary && empl.salary <= toSalary);
}
console.log(getEmployeeBySalary(employees, 15300, 20000))

function getEmployeeByCity(employees, city) {
  return employees.find(empl => empl.adress.city === city);
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