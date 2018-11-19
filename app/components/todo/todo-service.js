

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/Joels/todos/',
	timeout: 3000
});

function logError(e) {
	throw new Error(e)
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

	toggleTodoStatus(todoId, getTodos) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList
		let todo = {}
		for (let i = 0; i < todoList.length; i++) {
			let t = todoList[i];
			if (todoId == t._id) {
				todo = t;
			}
		}
		todo.completed = !todo.completed;

		todoApi.put(todoId, todo)
			.then(function (res) {
				getTodos()
			})
			.catch(logError)
	}

}
