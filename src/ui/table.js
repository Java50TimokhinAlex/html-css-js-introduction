
export class Table {
  #schema; // array of objects{columnName: <string>, fieldName: <string>}
  #tBodyElement;

  constructor(parentId, tableName, schema, employees) {
    const parentElement = document.getElementById(parentId);

    this.#schema = schema;
    if (!parentElement) {
      throw `wrong parentId ${parentId}`;
    }

    parentElement.innerHTML = `<h3 class="table-logo">${tableName}</h3>
    <table>
     <thead>
      <tr>
        ${getHeader(schema)}
      </tr>
     </thead>
    <tbody id="${tableName}">
      
    </tbody>
  </table>`;
    this.#tBodyElement = document.getElementById(tableName);

    employees.forEach((employee) => {
      const item = {...employee};
      item.city = employee.address.city;
      item.country = employee.address.country;
      delete item.address

      this.addRow(item);
    });
  }

  addRow(object) {
    this.#tBodyElement.innerHTML += getRow(object, this.#schema);
  }
}

function getHeader(schema) {
  return schema.map((obj) => `<th>${obj.columnName}</th>`).join("");
}

function getRow(data, schema) {
  return `<tr> ${getTds(data, schema)}</tr>`;
}

function getTds(data, schema) {
  return schema.map((obj) => `<td>${data[obj.fieldName]}</td>`).join("");
}
