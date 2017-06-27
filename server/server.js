var config=require('./config');
var restify = require('restify');
var mongoose = require('mongoose');
mongoose.connect('mongodb://'+config.connectionString);
if(config.hasModel)
	require('./models/models').init();
var customer = require('./routes/customer');

var server = restify.createServer({
  name: config.name,
  version: config.version
});
server.pre(restify.pre.userAgentConnection());
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());

server.post('login' , customer.checkCustomerLogin);


server.listen(config.port, function() {
    console.log("API is running and listening on port "+config.port);
});
