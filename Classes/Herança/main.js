class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();

    this.usuario = 'Rods';
  }

  mostrarUsuario() {
    console.log(this.usuario);
  }
}

const todoList = new TodoList();
btnAdd = document.querySelector('button#btnAdd');
btnAdd.onclick = () => todoList.add("Novo todo v");

todoList.mostrarUsuario();