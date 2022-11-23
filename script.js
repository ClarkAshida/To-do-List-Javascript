const btn = document.getElementById("send");
const task = document.getElementById("task");
let btnDelete;

btn.addEventListener("click", createTask)
document.addEventListener('DOMContentLoaded', getTodos);

function createTask(){

let newTask = document.createElement("ul");
newTask.innerHTML = '<input type = "checkbox" id="checkbox" value="first_checkbox"></input>'
newTask.classList.add("task-container")

let taskContent = document.createElement("li");
taskContent.innerText = task.value;
newTask.appendChild(taskContent);
document.body.appendChild(newTask);

saveLocalTodos(task.value);

task.value = "";
  
btnDelete = document.createElement("button")
btnDelete.innerHTML='x'
newTask.appendChild(btnDelete);
btnDelete.classList.add('btnDelete');
btnDelete.addEventListener("click", deleteTask)

function deleteTask(){
	removeLocalTodos(taskContent);
	document.body.removeChild(newTask, taskContent);
}

}

task.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
  if (key == 13) {
      createTask()
  }
});

function saveLocalTodos (todo) {
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}
	todos.push(todo);
	localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos () {
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}
	todos.forEach(function(todo){

    let newTask = document.createElement("ul");
    newTask.innerHTML = '<input type = "checkbox" id="checkbox" value="first_checkbox"></input>'
    newTask.classList.add("task-container")
   
    let taskContent = document.createElement("li");
    taskContent.innerText = todo;
    newTask.appendChild(taskContent);

    btnDelete = document.createElement("button")
    btnDelete.innerHTML='x'
    btnDelete.classList.add('btnDelete');
	newTask.appendChild(btnDelete);

    document.body.appendChild(newTask);

	function deleteTask(){
		removeLocalTodos(taskContent);
		document.body.removeChild(newTask, taskContent);
	}
	btnDelete.addEventListener("click", deleteTask)
	});
	
}

function removeLocalTodos (todo){
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}
	todos.splice(todos.indexOf(todo.innerText), 1);
	localStorage.setItem('todos', JSON.stringify(todos));
}