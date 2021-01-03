const todos = [
	{
		id: 1,
		text: 'Take out trash',
		isCompleted: true,
	},
	{
		id: 2,
		text: 'Meeting with boss',
		isCompleted: true,
	},
	{
		id: 3,
		text: 'Dentist appt',
		isCompleted: false,
	},
];

const todoCompleted = todos.filter(function (todo) {
	return todo.isCompleted === true;
});

console.log(todoCompleted);
