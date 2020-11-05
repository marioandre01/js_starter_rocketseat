//Promises ou Promessas são códigos que não vão influenciar na linha do tempo do código do javascript
// são funções que vão devolver o valor de resultados sejam eles de sucesso ou erro só depois de um tempo, e não presica se preocupar quando esse valor vai ser retornado, pois o javascript vai ficar executando normalmente 

var minhaPromises = function() {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest(); 
        xhr.open('GET', 'https://api.github.com/users/marioandre01');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4) {
                //console.log(JSON.parse(xhr.responseText));
                //O código de sucesso da requisição é 200
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    //Caso o resultado não seja 200, não seja sucesso
                    //mostrar uma mensageam
                    reject('Erro na requisição');
                }
            }
        }
    });
}

//O "resolve" e o "reject" são funções
//O "resolve" é uma função utilizada quando o resultado obitido é de sucesso
//O "reject" é uma função utilizada quando o resultado obitido não foi de sucesso

//Chamar a promises
//var resultado = minhaPromises();
//console.log(resultado);

//Ao verificar o resultado no console, vai mostrar  Promise{<pending>}
//Promise{<pending>} significa que o console.log(resultado), foi chamdo, mas a função minhaPromises() atribuída a resultado ainda não terminou sua execução
// Indo na aba networking em inspecionar no navegador, vai mostrar que a requisição foi realizada.

//Para mostrar o a respoat da requisição corretamente , ou seja, não mostrar Promise{<pending>} fazer
minhaPromises()
    //o resolve vai chamar a função then()
    .then(function(response) {
        console.log(response);
    })
    //o reject vai chamar a função catch()
    .catch(function(error) {
        console.warn(error);
    });