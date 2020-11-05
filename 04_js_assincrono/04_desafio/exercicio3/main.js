var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

function renderRepos() {
    //Tudo o que tiver dentro da ul vai ser colocado como vazio ('')
    listElement.innerHTML = '';

    var inputText = inputElement.value;
    inputElement.value = '';

    addLi('Carregando...')

    axios.get('https://api.github.com/users/'+inputText+'/repos')
    .then(function(response) {
        listElement.innerHTML = '';

        for (data of response.data){
            addLi(data.name)
        }
    })
    .catch(function(error) {
        console.warn(error);
       
        listElement.innerHTML = '';
        var pElement = document.createElement('p');
        var pText = document.createTextNode('Esse usuário não existe');

        pElement.appendChild(pText);

        listElement.appendChild(pElement);
    });

}

function addLi(texto) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(texto);
    
    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);          
}

buttonElement.onclick = renderRepos;
