module.exports = {
  authenticateEmployeeInfo: async function (req, res) {
    var password = req.param('password');
    var employeeID = req.param('employeeID');
    console.log(password + "---" + employeeID);
    // refer to https://sailsjs.com/documentation/reference/waterline-orm/models

    var employee = await Employee.find({
      id: employeeID
    });

    if (employee.length > 0) {
      //  console.log('Found at least one record, and its `id` is:', gpaRecord[0].name);
      var feedback = '000';
      if (password == employee[0]['password']) {
        sails.log.info("Login Successful");
        feedback = {
          'Result': 'Successfully'
        };
      } else {
        sails.log.info("Login fail - Invalid Password");
        feedback = {
          'Result': 'Invalid Password'
        };
      }
      console.log(feedback);
      return res.json(feedback);
    } else {
      sails.log.info("Login fail - user not found");
      var feedback = {
        'Result': 'No record in database'
      };
      console.log(feedback);
      return res.json(feedback);
    }
  }

};
