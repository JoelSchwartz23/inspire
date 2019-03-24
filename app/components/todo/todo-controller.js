import TodoService from "./todo-service.js";

var todoService = new TodoService

function getTodos() {
	todoService.getTodos(drawTodo)
}


function drawTodo(todos) {
	console.log(todos)
	var template = `<b> To do list : </b>  <ins>${todos.length}</ins>`
	todos.forEach(todo => {
		template += `
			<li>
				<input type="checkbox" ${todo.completed ? "checked" : ""}  onchange="app.controllers.todoController.toggleTodoStatus('${todo._id}')" id="${todo._id}"> -- ${todo.description}<i class="fa fa-fw fa-trash action muted" onclick="app.controllers.todoController.deleteTodo('${todo._id}')"></i>
			</li>
		`
	});
	document.getElementById('todo').innerHTML = template;
}


export default class TodoController {
	constructor() {
		todoService.getTodos(drawTodo)
	}

	addTodoFromForm(e) {
		e.preventDefault()
		var form = e.target;
		var todo = {
			description: form.description.value
		}
		todoService.addTodo(todo, getTodos)
	}

	toggleTodoStatus(todoId) {
		todoService.toggleTodoStatus(todoId, getTodos)
	}

	deleteTodo(todoId) {
		todoService.deleteTodo(todoId, drawTodo)
	}
}
