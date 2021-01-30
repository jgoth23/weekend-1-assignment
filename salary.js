console.log('js');

$(document).ready(readyNow);

function readyNow() {
  console.log('JQ');

  // Add employee on click
  //Save employee info to array
  $(document).on('click', '#addEmployeeBtn', onAddEmployee);
}

function onAddEmployee(event) {
  event.preventDefault();
  console.log('onAddEmployee');
}
