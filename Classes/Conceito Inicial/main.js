class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo() {
    this.todos.push('Novo todo t');
    console.log(this.todos);
  }
}

const todoList = new TodoList();
btnAdd = document.querySelector('button#btnAdd');
btnAdd.onclick = () => todoList.addTodo();