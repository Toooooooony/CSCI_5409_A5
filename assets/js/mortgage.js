var employee = document.getElementById("employee");
var applicationID = document.getElementById("applicationID");
var address = document.getElementById("address");
var agree = document.getElementById("agree");
var submit = document.getElementById("submit");
var employeeID = localStorage.getItem('employeeID');

employee.innerHTML = "Mortgage Support";

submit.addEventListener('click', function() {
  var api = 'send_employee_info';
  var url = `${window.location.origin}/${api}`;
  io.socket.post(url, {employeeID: employeeID} , function(resData, jwres) {
    console.log(url);
  });

});
