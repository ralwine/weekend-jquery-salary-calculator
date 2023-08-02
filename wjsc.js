$(document).ready(onReady);
//Need a global variable! Might be why things aren't working on ln56
let totalMonthlySalary = 0

function onReady() {
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
        annualSalary: Number($('#annualSalary').val())// this was a string here.... don't use commas!
    }
    console.log("Employee is: ", employee)
    render(employee)
}

function deleteEmployee() {
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
            <td>$${employee.annualSalary}</td>
            <td>
                <button id="delete-button">
                    REMOVE ASSOCIATE
                </button>
        </tr>
    `)
    // employee.annualSalary to monthly -> employee.annualSalary/12
    /// math logic here?
    let employeeMonthlySalary = employee.annualSalary / 12;
    totalMonthlySalary = totalMonthlySalary + employeeMonthlySalary; // does not like this with let... fixed with global var!
    // can we get this rendering to DOM? should be triggering conditional!
    $('#total').append(`
        <span id=monthly>${totalMonthlySalary}</span>
    `)

    $(`#monthly`).remove()
    //conditional here to target totalMonthlySalary... check your HTML and CSS!
    if (totalMonthlySalary > 20000) {
        $('#end').addClass('.redZone');
    }
}