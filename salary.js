console.log('js');

$(document).ready(readyNow);

const employeeInfo = [];

function readyNow() {
  console.log('JQ');

  // Add employee on click
  //Save employee info to array
  $(document).on('click', '#addEmployeeBtn', onAddEmployee);
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
}
