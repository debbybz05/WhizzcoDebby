import mongoose from 'mongoose';
import config from './config';
mongoose.connect('mongodb://'+config.connectionString);
import {init} from './models/models'; 
init();
const WaitingCalls = mongoose.model('WaitingCalls');

var wc= new WaitingCalls({
	"topWaiting":"01:09",
	"waitingAvg":"00:14",
	"maxWait":"02:27",
	"calls":"0",
	"total":"1"
})
wc.save();