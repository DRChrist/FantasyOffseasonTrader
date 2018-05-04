/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */
var fs = require("fs");
var stream = fs.createReadStream('Basic_Stats.csv');
var csv = require('fast-csv');

module.exports.bootstrap = function(cb) {
  cb();
	// csv
	// // .fromPath('../Basic_Stats.csv')
	// .fromStream(stream, {headers : ["Age",
	// 																		, //Birth Place
	// 																		"Birthday",
	// 																		"College",
	// 																		"CurrentStatus",
	// 																		"CurrentTeam",
	// 																		"Experience",
	// 																		"Height",
	// 																		, //High School
	// 																		, //High School Location
	// 																		"Name",
	// 																		"Number",
	// 																		, //Player Id
	// 																		"Position",
	// 																		"Weight",
	// 																		"YearsPlayed"]},
	// 																		{ignoreEmpty: true},
	// 																		{renameHeaders: true})
	// .on("data", function(data){
	// 	// console.log(data.CurrentStatus);
	// 	var age1 = Number(data.Age);
	// 	var height1 = Number(data.Height);
	// 	var weight1 = Number(data.Weight);
	// 	var number1 = Number(data.Position);
	// 	Player.create( {age: data.age1,
	// 									birthday: data.Birthday,
	// 									college: data.College,
	// 									status: data.CurrentStatus,
	// 									nflTeam: data.CurrentTeam,
	// 									experience: data.Experience,
	// 									height: data.height1,
	// 									name: data.Name,
	// 									number: data.number1,
	// 									position: data.Position,
	// 									weight: data.weight1,
	// 									yearsPlayed: data.YearsPlayed})
	// 	.exec(function(err, createdPlayer){
	// 		if(err) {
	// 			console.log(err);
	// 			return cb(err);
	// 		}
	// 		console.log(createdPlayer.id);
	// 		});
	// })
	// .on("end", function() {
	// 	console.log("done");
	// 	cb();
	// });

};
