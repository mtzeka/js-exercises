// Exersize 6: turn your grade book from exercise 5 into a function that returns
// the grade value replace the text in the html with the appropriate letter grade
// hint: the entire if statement will go inside the getLetterGrade function

function getLetterGrade (grade) {
	return 'F';
}

var grade = 80;
var letterGrade = getLetterGrade(grade);

$('.grade').text(grade);
$('.letter-grade').text(letterGrade);