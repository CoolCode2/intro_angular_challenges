console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
 app.controller("WelcomeController", WelcomeController);

function WelcomeController(){
  this.full_name = "Cole";
  this.age = 29;
  this.city = "Santa Cruz";
  this.state= "California";
}

function cont(){
	this.class_name = "Cohort 3" ;
	this.enrolled_students= "12";
	this.start_date= "3/11";
	this.end_date="6/2";
	this.daysRemaining(42);
}

