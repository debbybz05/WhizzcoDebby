var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var customerSchema = new Schema({  
    email:  String,
    password:  String

});

mongoose.model('Customer', customerSchema, 'Customer');