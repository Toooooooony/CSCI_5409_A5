module.exports = {
  registerCallback: async function(req, res) {
    var postData = req.body;
    var employeeID = req.param('employeeID');
    var name = req.param('name');
    var callback = req.param('callback');

    var newCallback = await Callback.create({
      id: employeeID,
      name: name,
      callback: callback
    }).fetch();

    var myData = {};
    var jsonData;
    myData.message = "success! New add callback for " + newCallback.name;
    myData.employeeID = newCallback.employeeID;
    jsonData = JSON.stringify(myData);

    return res.json(jsonData);
  }
};
