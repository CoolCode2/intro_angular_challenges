console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
 app.controller("WelcomeController", WelcomeController);
 app.controller("ClassController", ClassController); //allows angular to be used on other page

function WelcomeController(){
  this.full_name = "Cole";
  this.age = 29;
  this.city = "Santa Cruz";
  this.shout = function(name){
  	return name.toUpperCase() +"!";
  };
  this.state= "California";
}

function ClassController(){
	this.class_name = "wdi" ;
	this.enrolled_students= ["alexi","jess","cole","billy","cam","jacey","tyler","alex","troy"];
	this.start_date= "3/13/2017";
	this.end_date="6/2/2017";
	this.daysRemaining = function(){
		
		var oneDay = 1000*24*60*60;
		var months = Date.parse(this.end_date)-Date.now();
		console.log(months);
		var days = Math.round(months/oneDay);
		console.log(days);
		return days;
	};
	
}

