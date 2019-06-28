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
    },
    findbyid: async function (req, res, next) {
        var id = req.param('id');
        var email = req.param('email');
        var result = await Brokercustomer.find({
            id: id,
            email: email
        });
        res.status(200);
        res.json(result);
    }
};

