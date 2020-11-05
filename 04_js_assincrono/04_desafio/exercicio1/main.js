function checaIdade(age) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(age >= 18){
                resolve();
            } else {
                reject();
            }
        }, 2000);
    })       
}

//A função parseInt() analisa um argumento string e retorna um inteiro na base especificada.
var age = parseInt(prompt('Digite sua idade: '), 10);

checaIdade(age)
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    });
