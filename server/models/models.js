var models = ['customer'];

exports.init = function(){
	var l = models.length;
	for (var i = 0; i < l; i++){
			var t = './' + models[i];
			require(t);
		}
};
