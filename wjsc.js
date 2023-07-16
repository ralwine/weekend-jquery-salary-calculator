$(document).ready(onReady);

function onReady(){
    console.log('in onReady');

   $('.submit').on('firstName', addFirstName);
   $('.submit').on('click', addLastName);
   $('.submit').on('click', addID);
   $('.submit').on('click', addTitle);
   $('.submit').on('click', addAnnualSalary);

}

function addFirstName(firstName) {
    console.log('in firstName');
}

function addLastName() {

}

function addID() {

}

function addTitle() {

}

function addAnnualSalary() {

}
