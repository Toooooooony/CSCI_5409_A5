/**
 * BrokercustomerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    // create: function (req, res, next) {
    //     var data = req.body;
    //     Brokercustomer.create(data).then(customer=>{
    //         return res.send(customer);
    //     })
    // },
 create: async function (req, res, next) {
    var data = req.body;
    var createdUser = await Brokercustomer.create(data).fetch();
    res.json(createdUser);
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
    },
    updatebyid: async function (req, res, next) {
        var id = req.param('id');
        var salary = req.param('salary');
        var job_duration = req.param('job_duration');
        await Brokercustomer.update({
            id: id
        })
        .set({
            salary: salary,
            job_duration: job_duration,
            status: "Completed"
          });
        res.status(200);
        res.json({
            message: "Salary and job duration updated!"
        });
    }
};

