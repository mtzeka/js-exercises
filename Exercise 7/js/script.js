// Exersize 7: Loop through the array of objects of students
// and use the function you created in exercise 6 to get each of the grades
// and append them to the HTML

var students = [
	{
		name: 'Maria',
		grade: 85
	},{
		name: 'Bob',
		grade: 90
	},{
		name: 'Justin',
		grade: 75
	},{
		name: 'Tiffany',
		grade: 100
	}
];

// hard-coded example
$('ul.students').append('<li>Maria has an 85 with letter grade B</li>');