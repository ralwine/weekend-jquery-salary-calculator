$(document).ready(onReady);

function onReady(){
    console.log('in onReady');

   //Delete listener
   $('#salaryTable').on('click', '#delete-button', deleteEmployee);
   
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
    render(employee)
}

function deleteEmployee(){
    console.log("In deleteEmployee")
    // add functionality
    $(this).parent().parent().remove(); // just removing button itself .parent()
}

function render(employee) {
    console.log("Render responding")
    // Respodning... #salaryTable needs to be targeted to append
    $('#salaryTable').append(`
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
            <td>
                <button id="delete-button">
                    REMOVE ASSOCIATE
                </button>
        </tr>
    `)

    /// math logic here?
}