   var employee = document.getElementById("employee");
   employee.innerHTML = "Login"
   var password = document.getElementById("password");
   var employeeID = document.getElementById("employeeID");
   var login = document.getElementById("login");

   login.addEventListener('click', function () {
     console.log("pa---" + password.value);
     console.log("id---" + employeeID.value);
     if (password.value != '' && employeeID.value != '') {
       // send request
       var url = "http://localhost:1337/authenticate";
       var xhr = new XMLHttpRequest();
       xhr.open("POST", url, true);
       xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
       // set the request
       xhr.send(`{"password":"${password.value}","employeeID":"${employeeID.value}"}`);
       //handle return result
       xhr.onload = function () {
         var result = xhr.responseText;
         console.log(JSON.parse(result)['Result']);
         //jump to profile page
         if(JSON.parse(result)['Result'] == 'Successfully'){
          window.location.href = '/mortgage';
          localStorage.setItem("employeeID", employeeID.value);
         }
       }
     } else {
       alert("please submit valid input");
     }
   });
 
