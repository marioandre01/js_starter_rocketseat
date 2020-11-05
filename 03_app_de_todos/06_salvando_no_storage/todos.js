var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//Pega as informações do local storage, que foram salvos nas ações de adicionar todo e excluir todo
//Tenta conseguir a informação de "list_todos" se não existir retorna um vetor vazio
//para converter o vetor "todos" de string para vetor usar JSON.parse()
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    //Tudo o que tiver dentro da ul vai ser colocado como vazio ('')
    listElement.innerHTML = '';

    for (todo of todos){
        
        //console.log(todo);
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    //pegar o texto digitado no input
    var todoText = inputElement.value;

    //adicionar o texto no array todos
    todos.push(todoText);
    //apagar o que foi digitado no input
    inputElement.value = '';
    //renderizar novamente os itens do vetor todos
    renderTodos();
    saveToStorage()
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    //apartir da posição "pos" remove x itens, no caso 1 item
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage()
}

function saveToStorage() {
    //tem que passar um nome "list_todos" e uma string
    //para converter o vetor "todos" para string usar JSON.stringify()
    localStorage.setItem('list_todos', JSON.stringify(todos));
}