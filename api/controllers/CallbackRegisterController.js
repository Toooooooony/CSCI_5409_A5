module.exports = {
  registerCallback: async function(req, res) {
    var postData = req.body;
    var keywords = req.param('keywords');
    var callback = req.param('callback');

    var myData = {};
    var jsonData;
    myData.callback_url = callback;
    jsonData = JSON.stringify(myData);


    var request = require('request');

    request.post({
      url: callback,
      body: jsonData,
      json: true
    }, function(error, response, body) {
      if (error) {
        sails.log.error(error);
      } else {
        sails.log.info(response);
        sails.log.info(body);
      }
    });

    return res.json(jsonData);
  }
};
