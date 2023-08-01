$(document).ready(onReady);

function onReady(){
    console.log('in onReady');

   
   
   $('.submit-button').on('click', addEmployee);

}

// Let's roll this into one function
function addEmployee(event) {
    console.log('in addEmployee');
    event.preventDefault();
    // roll it into an object
    let employee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        idNumber: $('#idNumber').val(),
        title: $('#title').val(),
        annualSalary: $('#annualSalary').val()// this is a string here
    }
    console.log("Employee is: ", employee)
}

