console.log('js');

$(document).ready(readyNow);

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
  let firstName = $('#firstNameInput');
  let lastName = $('#lastNameInput');
  let employeeID = $('#employeeIDInput');
  let title = $('#employeeTitleInput');
  let annualSalary = $('#annualSalaryInput');

  let employeeInfo = {
    firstName: firstName,
    lastName: lastName,
    employeeID: employeeID,
    title: title,
    annualSalary: Number(annualSalary),
  };
}
