module.exports = {
  sendEmployeeInfo: async function(req, res) {
    var postData = req.body;
    var employeeID = req.param('employeeID');
    var applicationID = req.param('applicationID');

    var reault = await Employee.find({
      id: employeeID,
    });

    var myData = {};
    var jsonData;
    myData.name = reault[0]['name'];
    myData.position = reault[0]['position'];
    myData.salary = reault[0]['salary'];
    myData.job_duration = reault[0]['length'];
    jsonData = JSON.stringify(myData);

    if (reault == null || reault == "[]") {
      return res.notFound();
    } else {

      var callback_info = await Callback.find({
        id: employeeID,
        applicationID: applicationID
      });

      var request = require('request');

      sails.log.info("send employee info");

      request.post({
        url: callback_info[0]['callback'],
        body: jsonData,
        json: true
      }, function(error, response, body) {
        if (error) {
          sails.log.error(error);
        } else {
          sails.log.info(response);
        }
      });
    }
  }

};
