//import fetch from 'isomorphic-fetch';
import * as types from '../constants/ActionTypes'

function requestLogin(requestParams) {
	console.log("requestLogin");console.log(requestParams)
	return {
		type: types.REQUEST_LOGIN,
		requestParams
	};
}
function receiveLogin(requestParams, json) {
	return {
		type: types.RECEIVE_LOGIN,
		requestParams,
		isLogin: json
	};
}
export function fetchLogin(requestParams) {
	console.log("AAAAAAAAAAAAAAAAAAAAAAAA")
	return function (dispatch) {//here there is an error
		console.log("GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG")
		dispatch(requestLogin(requestParams));
		console.log("HHHHHHHHHHHHH");console.log(requestParams)
			return fetch('http://localhost:1300/login', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					requestParams
				})
			})
			.then(response => response.json())
			.then(json =>{console.log("HHHHHHHHHHHHH"+json);
				dispatch(receiveLogin(requestParams, json))
			})
			.catch(function (err){
				console.log("err: "+err);
			});
	}
}
/*
export function login(email,password){
	let cb=(password==="1234"
		?{
			type: types.LOGIN,
			isLogin: true
		}
		:{
			type: types.LOGIN,
			isLogin: false,
			error:"error"
		})
	return(cb);
};*/
export function logout(){
	return({
		type: types.LOGOUT,
		isLogin:false
	});
};
export function setError(){
	return({
		type: types.SET_ERROR,
		error:null
	});
};
export function getGeneralData(){
	let Imppressisons="10987";
	let Clicks="1236";
	let CTR="11.2";
	let eCPM="4.5$";
	return({
		type: types.GET_GENERAL_DATA,
		Imppressisons:Imppressisons,
		Clicks:Clicks,
		CTR:CTR,
		eCPM:eCPM
	})
};
export function getWebsites(){
	let websites=[{key:"cnn", name:"Cnn.com", Impressions:"2566", Clicks:"189"},
		{key:"ynet",name:"Ynet.co.il", Impressions:"3459", Clicks:"329"}]
	return({
		type: types.GET_WEBSITES,
		websites:websites
	})
};
export function getWebsite(webKey){
	let campaigns=[{name:"Nike", Impressions:"2566", Clicks:"189"},
		{name:"Coca Cola", Impressions:"3459", Clicks:"329"},
		{name:"Lotto", Impressions:"2566", Clicks:"189"},
		{name:"Wix", Impressions:"2566", Clicks:"189"}];
	return({
		type: types.GET_WEBSITE,
		key: webKey,
		campaigns:campaigns
	})
};

