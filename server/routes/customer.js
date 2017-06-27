var restify = require('restify');
var mongoose = require('mongoose');
var Customer=mongoose.model("Customer")

exports.checkCustomerLogin= function(req, res, next) {
	console.log("RRRRRRRRRRRRR")
	console.log(JSON.stringify(req.body));
    //Customer.findOne({},function(err,waitingCalls){
    	res.send(true);
        next();
    //});
} 