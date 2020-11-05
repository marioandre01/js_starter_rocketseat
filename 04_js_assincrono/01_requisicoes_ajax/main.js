//Em vez de ficar atualizando a página para trazer informações, será utilizado o AJAX para trazar informações do servidor sem precisar atualizar a página.
//AJAX significa Asynchronous JavaScript and XML, ou JavaScript e XML Assíncronos

//Para iniciar uma requisição AJAX
// A classe XMLHttpRequest() do javascript é que vai dar acesso a funcionalidade do AJAX para acesar alguma informação de um servidor
var xhr = new XMLHttpRequest();

//Para fazer a requisição xhr.open()
//Para buscar uma informação usar o metodo GET, o segundo parâmetro é a url de onde quer buscar a infomarção
xhr.open('GET', 'https://api.github.com/users/marioandre01');
//Enviando a requisição
xhr.send(null);

//Como a requisição é assíncrona ela não acontece no mesmo fluxo do código do javascript. 
// O javascript não vai ficar esperando a requisição terminar para ele continuar executando o resto do código.
// Para mostrar a resposta de requisição no javascript fazer
xhr.onreadystatechange = function(){
    // O numero 4 significa quando a resposta da requisção voltou
    // Se for 4 é porque deu certo
    if (xhr.readyState === 4) {
        //mostrar o corpo da requisição
        //A resposta é um JSON, usar JSON.parse()
        //O método JSON.parse() analisa uma string JSON, construindo o valor ou um objeto JavaScript descrito pela string
        console.log(JSON.parse(xhr.responseText));
    }
}