function swithImgs(key, button) {
  button.class = "btn btn-success";
  var img = document.getElementById("imgs");
  img.width = '150';
  img.height = '150';
  if (key == 1) {
    img.src = "/images/login.png";
    img.width = '180';
    img.height = '180';
    document.getElementById("loginForm").innerHTML = "<b>Employee Name: <br> <input type=\"text\" placeholder=\"First name\" id=\'firstName\' required /> <br><input type=\"text\" placeholder=\"Last name\"  id=\'lastName\' required/> <br> Employee ID: <br><input type=\"text\" placeholder=\"Employee ID\"  id=\'employeeID\' required/> <br><button type=\"button\" class=\"btn btn-success\" onclick=\"login()\">Login</button>";
  } else if (key == 2) {
    img.src = "/images/contactUS.png";
    document.getElementById("loginForm").innerHTML = "<b>Content<br><textarea row=\"25\" cols=\"25\" style=\"resize:none;\"></textarea> <br> <button type=\"button\" class=\"btn btn-primary\" onclick=\"goToMessageSent()\">Submit</button>";
  } else {
    img.src = "/images/reportIssue.PNG";
    document.getElementById("loginForm").innerHTML = "<b>Content<br><textarea row=\"25\" cols=\"25\" style=\"resize:none;\"></textarea> <br> <button type=\"button\" class=\"btn btn-warning\" onclick=\"goToMessageSent()\">Report</button>";
  }
}

function login() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var employeeID = document.getElementById('employeeID').value;
  // send weight and heiget values to backend
  var httpRequest = new XMLHttpRequest();
  // httpRequest.open('POST', 'http://127.0.0.1:1337/something', true);
  // httpRequest.setRequestHeader('Content-Type', 'application/json');
  //callback function with BMI and suggestion
  httpRequest.onload = function () {
    var result = httpRequest.responseText;
    //jump to profile page
  }
  var message = "{\"firstName\":" + firstName + ",\"lastName\":" + lastName + ",\"employeeID\":" + employeeID + "}";
  //httpRequest.send(message);
  window.location.href = '/employee';
}

function goToMessageSent() {
  window.location.href = '/message_sent';
}
