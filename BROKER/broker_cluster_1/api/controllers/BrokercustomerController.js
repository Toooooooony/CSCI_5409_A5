/**
 * BrokercustomerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: function (req, res, next) {
        var data = req.body;
        Brokercustomer.create(data, function(err, songs){
            if (err) return next(err);
            res.status(200);
            res.json(songs);
        });
    }

};

