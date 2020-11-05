var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

function renderRepos() {
    //Tudo o que tiver dentro da ul vai ser colocado como vazio ('')
    listElement.innerHTML = '';

    var inputText = inputElement.value;
    inputElement.value = '';

    axios.get('https://api.github.com/users/'+inputText+'/repos')
    .then(function(response) {
        for (data of response.data){

            var todoElement = document.createElement('li');
            var todoText = document.createTextNode(data.name);
    
            todoElement.appendChild(todoText);
    
            listElement.appendChild(todoElement);
        }
    })
    .catch(function(error) {
        console.warn(error);
    });

}

buttonElement.onclick = renderRepos;
