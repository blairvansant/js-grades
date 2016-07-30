//Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

//A score of 50-60 is an F
//A score of 61-70 is a D
//A score of 71-80 is a C
//A score of 81-90 is a B
//A score of 91-100 is an A
//Start with array of random scores in your JavaScript

//var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
//Use console.log to output the following criteria:

//How many of each grade?
//What is the lowest grade?
//What is the highest grade?

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var letterGrade  = {
	lowest:100,
	F :[],
	D :[],
	C :[],
	B :[],
	A :[],
	highest:0
}


for (var i = 0; i < scores.length; i++) {

	var currentScore = scores[i];
	
	if (currentScore < 60) {
		letterGrade.F.push(currentScore);
	}

	else if (currentScore < 70) {
		letterGrade.D.push(currentScore);
	}

	else if (currentScore < 80) {
		letterGrade.C.push(currentScore);
	}

	else if (currentScore < 90) {
		letterGrade.B.push(currentScore);
	}

	else if (currentScore < 100) {
		letterGrade.A.push(currentScore);
	 }

	 //console.log(currentScore + " < " + letterGrade.lowest + " is " + (currentScore < letterGrade.lowest));

	if (currentScore < letterGrade.lowest) {
	 	letterGrade.lowest = currentScore;
	 }
     
     //console.log(currentScore + " > " + letterGrade.highest + " is " + (currentScore < letterGrade.highest));
	 
	 if (currentScore > letterGrade.highest) {
	 	letterGrade.highest = currentScore;
	 }
}

console.log(letterGrade);

console.log("Number of F's" ,letterGrade.F.length);

console.log("Number of D's", letterGrade.D.length);

console.log("Number of C's", letterGrade.C.length);

console.log("Number of B's", letterGrade.B.length);

console.log("Number of A's", letterGrade.A.length);

console.log("Highest grade", letterGrade.highest);

console.log("lowest grade", letterGrade.lowest);







