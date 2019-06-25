module.exports = {
  authenticateEmployeeInfo: async function (req, res) {
    var password = req.param('password');
    var employeeID = req.param('employeeID');
    console.log(password + "---" + employeeID);
    // refer to https://sailsjs.com/documentation/reference/waterline-orm/models

    var employee = await Employee.find({
      id: employeeID
    });

    console.log(employee);
    console.log(employee.length);
    //  console.log(employee[0]['name']);
    if (employee.length > 0) {
      //  console.log('Found at least one record, and its `id` is:', gpaRecord[0].name);
      var feedback = '000';
      if (password == employee[0]['password']) {
        feedback = {
          'Result': 'Successfully'
        };
      } else {
        feedback = {
          'Result': 'Invalid Password'
        };
      }
      console.log(feedback);
      return res.json(feedback);
    } else {
      var feedback = {
        'Result': 'No record in database'

      };
      console.log(feedback);
      return res.json(feedback);
    }
  }

};
