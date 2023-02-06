import { Company, createEmployee } from "./service/company.js";
import { EmployeeForm } from "./ui/employee-form.js";
import { Table } from "./ui/table.js";
import { Tabs } from "./ui/tabs.js";

const company = new Company();

const tableExecutor = () => {
  const schema = [
    { columnName: "Employee ID", fieldName: "id" },
    { columnName: "Name", fieldName: "name" },
    { columnName: "Birth year", fieldName: "birthYear" },
    { columnName: "Salary (NIS)", fieldName: "salary" },
    { columnName: "Country", fieldName: "country" },
    { columnName: "City", fieldName: "city" },
  ];

  const employees = company.getAllEmployees();
  new Table("table-section", "Employees", schema, employees);
};

const formExecutor = () => {
  const employeeForm = new EmployeeForm("form-section");

  function addEmployee(employeeData) {
    const employee = createEmployee(
      employeeData.name,
      +employeeData.birthYear,
      +employeeData.salary,
      employeeData.city,
      employeeData.country
    );
    const res = company.addEmployee(employee);

    if (res.message === "") {
      employeeData.id = res.id;
    }
    return res.message;
  }
  employeeForm.addFormHandler(addEmployee);
};

const tabsSchema = [
  {
    name: "Employee Form",
    id: "employee-form-btn",
    contentElementId: "form-section",
    executor: formExecutor,
  },
  {
    name: "Employee Table",
    id: "employee-table-btn",
    contentElementId: "table-section",
    executor: tableExecutor,
  },
];

new Tabs(tabsSchema);
