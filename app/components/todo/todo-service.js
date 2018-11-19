

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/Joels/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let todoList = []

export default class TodoService {

	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => { // <-- WHY IS THIS IMPORTANT????
				todoList = res.data.data
				draw(todoList)
			})
			.catch(logError)
	}

	addTodo(todo, getTodoscb) {
		// WHAT IS THIS FOR???
		todoApi.post('', todo)
			.then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				getTodoscb()
			})
			.catch(logError)
	}

	deleteTodo(todo, getTodoscb) {
		todoApi.delete(todo)
			.then(res => {
				this.getTodos(getTodoscb)
			})
			.catch(logError)
	}

	toggleTodoStatus(todoId) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		var todo = {} ///MODIFY THIS LINE

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(function (res) {
				todo.completed = !todo.completed;
				this.getTodos()
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.catch(logError)
	}

}
