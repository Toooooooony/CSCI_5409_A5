var employee = document.getElementById("employee");
var applicationID = document.getElementById("applicationID");
var address = document.getElementById("address");
var agree = document.getElementById("agree");
var submit = document.getElementById("submit");
var employeeID = localStorage.getItem('employeeID');

submit.addEventListener('click', function() {
  var api = 'send_employee_info';
  var aid = applicationID.value;
  var url = `${window.location.origin}/${api}`;
  io.socket.post(url, {employeeID: employeeID, applicationID: aid} , function(resData, jwres) {
    console.log(url);
  });
});
