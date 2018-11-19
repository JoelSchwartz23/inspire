import TodoService from "./todo-service.js";



var todoService = new TodoService

// Use this getTodos function as your callback for all other edits
function getTodos() {
	//FYI DONT EDIT ME :)
	todoService.getTodos(drawTodo)
}


function drawTodo(todos) {
	//WHAT IS MY PURPOSE?
	//BUILD YOUR TODO TEMPLATE HERE
	console.log(todos)
	var template = `${todos.length}`

	//DONT FORGET TO LOOP
	todos.forEach(todo => {
		// let checked = ""
		// if (todo._completed) {
		// 	checked = "checked"
		// 
		template += `
			<li>
				<input type="checkbox" ${todo.completed ? "checked" : ""}  onchange="app.controllers.todoController.toggleTodoStatus('${todo._id}')" id="${todo._id}">${todo.description}<i class="fa fa-fw fa-trash action muted" onclick="app.controllers.todoController.deleteTodo('${todo._id}')"></i>
			</li>
		`
	});
	document.getElementById('todo').innerHTML = template;
}


export default class TodoController {
	constructor() {
		// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
		todoService.getTodos(drawTodo)
	}

	addTodoFromForm(e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target;
		var todo = {
			description: form.description.value
			// DONT FORGET TO BUILD YOUR TODO OBJECT
		}
		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	toggleTodoStatus(todoId) {
		// let todo = {
		// 	_id: todoid,
		// 	completed: document.getElementById('todoid')
		// }
		todoService.toggleTodoStatus(todoId, getTodos)
		// asks the service to edit the todo statuodos)
		// YEP THATS IT FOR ME
	}

	deleteTodo(todoId) {
		// ask the service to run the remove todo with this id
		todoService.deleteTodo(todoId, drawTodo)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}



}
