console.log("security_questions.js loaded");

var securityQuestions = [
	{
		question: "What is your best friends name?", expectedAnswer: "Bailey"
	},
	{
		question: "Whats your mothers maden name?", expectedAnswer: "Bryant"
	},
	{
		question: "What was your high school mascot?", expectedAnswer: "Devil"
	}
]

var userAnswer = "";
var wrong = false;

for (var i=0; i < securityQuestions.length; i++){
	userAnswer = prompt(securityQuestions[i].question);
	if (userAnswer !== securityQuestions[i].expectedAnswer){
		alert("WHOOPS! Incorrect security question response!");
    wrong = true;
		break;
	}
}

if (wrong){
  console.log("Stop!");
}
