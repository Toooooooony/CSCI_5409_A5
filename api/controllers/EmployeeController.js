module.exports = {
  sendEmployeeInfo: async function(req, res) {
    var postData = req.body;
    var employeeID = req.param('employeeID');

    var reault = await Employee.find({
      id: employeeID
    });

    var myData = {};
    var jsonData;
    myData.name = reault[0]['name'];
    myData.position = reault[0]['position'];
    myData.salary = reault[0]['salary'];
    jsonData = JSON.stringify(myData);

    sails.log.info(myData);

    if (reault == null || reault == "[]") {
      return res.notFound();
    } else {
      var callback_info = await Callback.find({
        id: employeeID
      });

      sails.log.info(callback_info[0]['callback']);

      var request = require('request');

      request.post({
        url: callback_info[0]['callback'],
        body: reault,
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
