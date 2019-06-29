module.exports = {
  registerCallback: async function(req, res) {
    var postData = req.body;
    var employeeID = req.param('employeeID');
    var name = req.param('name');
    var callback = req.param('callback');
    var applicationID = req.param('applicationID')

    var myData = {};
    var jsonData;
    myData.applicationID = applicationID;
    myData.employeeID = employeeID;
    myData.name = name;
    myData.callback = callback;
    jsonData = JSON.stringify(myData);

    var newCallback = await Callback.create({
      id: employeeID,
      applicationID: applicationID,
      name: name,
      callback: callback
    }).fetch();

    return res.json(jsonData);
  }
};
