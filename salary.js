console.log('js');

$(document).ready(readyNow);

const employeeInfo = [];
const maxMonthlyBudget = 20000;

function readyNow() {
  console.log('JQ');
  // Add employee on click
  //Save employee info to array
  $(document).on('click', '#addEmployeeBtn', onAddEmployee);
  $(document).on('click', '#deleteBtn', onDelete);
}
/**This function needs to grab input from the Dom
 * Creat in employee object
 * Push employee info into an array
 */
function onAddEmployee(event) {
  event.preventDefault();
  console.log('onAddEmployee');
  let firstName = $('#firstNameInput').val();
  let lastName = $('#lastNameInput').val();
  let employeeID = $('#employeeIDInput').val();
  let title = $('#employeeTitleInput').val();
  let annualSalary = $('#annualSalaryInput').val();
  // Object created of employee information
  // Clear inputs
  $('#firstNameInput').val('');
  $('#lastNameInput').val('');
  $('#employeeIDInput').val('');
  $('#employeeTitleInput').val('');
  $('#annualSalaryInput').val('');

  const employee = {
    firstName: firstName,
    lastName: lastName,
    employeeID: employeeID,
    title: title,
    annualSalary: Number(annualSalary),
  };
  console.log('Added an employee', employee);
  // Push employee into the employee info array
  employeeInfo.push(employee);
  console.log('employeeInfo', employeeInfo);

  $('#employeeTable').empty();
  for (let employee of employeeInfo) {
    $('#employeeTable').append(`
  <tr>
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.employeeID}</td>
    <td>${employee.title}</td>
    <td>${employee.annualSalary}</td>
    <td><button type="button" id="deleteBtn" value="${employee.employeeID}">Delete</button></td>
  </tr>
  `);
  }
  totalSalary();
}

function onDelete() {
  for (let i = 0; i < employeeInfo.length; i++) {
    console.log('inside delete', this.value);
    if (employeeInfo[i].employeeID === this.value) {
      employeeInfo.splice(i, 1);
      $(this).closest(`tr`).empty();
    }
  }
  console.log('insideDelete');
}
//let monthlyExpense = 0;
function totalSalary() {
  //let maxMonthlyBudget = 20000;
  let monthlyExpense = 0;
  for (let employee of employeeInfo) {
    let monthlyWages = employee.annualSalary / 12;
    monthlyExpense += monthlyWages;
  }
  console.log(monthlyExpense);
  $('#monthlyCosts').append(`<h3>${monthlyExpense}</h3>`);
  if (monthlyExpense > maxMonthlyBudget) {
    $('#monthlyCosts').css('background-color', 'red');
  }
}
