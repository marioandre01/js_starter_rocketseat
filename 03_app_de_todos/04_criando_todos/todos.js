var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade da Rocketseat'
];

function renderTodos() {
    //Tudo o que tiver dentro da ul vai ser colocado como vazio ('')
    listElement.innerHTML = '';

    for (todo of todos){
        
        //console.log(todo);
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
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
}

buttonElement.onclick = addTodo;