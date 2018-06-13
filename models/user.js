var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({          
    username : { type: String, index: true},                    
    password: {type: String},                        
    age: {type: Number},                        
    logindate : { type: Date, default: Date.now} ,
    gender : {type: Number},  // 0 - male, 1 - female  
    avatar : {type: String}                    
});


var User = mongoose.model('User',UserSchema); 


exports.insertOneUser = function(userObj, callback){
	var user = new User(userObj);

	user.save(function(err, result){
		if (err) {
			Console.log("Error:" + err);
			return;
		}

		callback(null, result);
	});
}


exports.updateUser = function(whereJson, updateJson, callback){
	User.update(whereStr, updateStr, function(err, result){
		if (err) {
			Console.log("Error:" + err);
			return;
		}

		callback(null, result);
	});
}


exports.findByIdAndUpdate = function(_id, updateJson, callback){
	User.findByIdAndUpdate(_id, updateStr, function(err, result){
		if (err) {
			Console.log("Error:" + err);
			return;
		}

		callback(null, result);
	});
		
}

exports.deleteUser = function(whereJson, callback){
	User.remove(whereJson, function(err, result){
		if (err) {
			Console.log("Error:" + err);
			return;
		}

		callback(null, result);
	});
}

exports.findUser = function(whereJson, options, callback){
	User.find(whereJson, options, function(err, result){
		if (err) {
			Console.log("Error:" + err);
			return;
		}

		callback(null, result);
	})
}

exports.countUser = function(whereJson, callback){
	User.count(whereJson, function(err, result) {
		if (err) {
			Console.log("Error:" + err);
			return;
		}

		callback(null, result);
	});
}
