function swithImgs(key, button) {
  button.class = "btn btn-success";
  var img = document.getElementById("imgs");
  img.width = '150';
  img.height = '150';
  if (key == 1) {
    img.src = "/images/login.png";
    img.width = '180';
    img.height = '180';
    document.getElementById("loginForm").innerHTML = "<b>Employee Name: <br> <input type=\"text\" placeholder=\"Name\" id=\'name\' required /> <br><input type=\"text\" placeholder=\"Password\"  id=\'password\' required/> <br> Employee ID: <br><input type=\"text\" placeholder=\"Employee ID\"  id=\'employeeID\' required/> <br><button type=\"button\" class=\"btn btn-success\" onclick=\"login()\">Login</button>";
  } else if (key == 2) {
    img.src = "/images/contactUS.png";
    document.getElementById("loginForm").innerHTML = "<b>Content<br><textarea row=\"25\" cols=\"25\" style=\"resize:none;\"></textarea> <br> <button type=\"button\" class=\"btn btn-primary\" onclick=\"goToMessageSent()\">Submit</button>";
  } else {
    img.src = "/images/reportIssue.PNG";
    document.getElementById("loginForm").innerHTML = "<b>Content<br><textarea row=\"25\" cols=\"25\" style=\"resize:none;\"></textarea> <br> <button type=\"button\" class=\"btn btn-warning\" onclick=\"goToMessageSent()\">Report</button>";
  }
}

function login() {
  var name = document.getElementById('name').value;
  var password = document.getElementById('password').value;
  var employeeID = document.getElementById('employeeID').value;

  if (name != '' && password != '' && employeeID != '') {
    // send request
    var url = "http://localhost:1337/authenticate";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    // set the request
    xhr.send(`{"name":"${name}","password":"${password}","employeeID":"${employeeID}"}`);
    //handle return result
    xhr.onload = function () {
      var result = xhr.responseText;
      console.log(JSON.parse(result));
      //jump to profile page
      //  window.location.href = '/employee';
    }
  }else{
    alert("please submit valid input");
  }

  // var message = "{\"firstName\":" + firstName + ",\"lastName\":" + lastName + ",\"employeeID\":" + employeeID + "}";
  //httpRequest.send(message);
  // window.location.href = '/employee';
}

function goToMessageSent() {
  window.location.href = '/message_sent';
}
