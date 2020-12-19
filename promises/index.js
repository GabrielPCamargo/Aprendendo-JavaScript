function contador(msg, time){
    return new Promise((resolve, reject) => {

        setTimeout( () => {
            resolve(msg);
        }, time);
    })
}


/*contador('testando1', 1000)
    .then( response => {
        console.log(response)
        return contador('testando2', 3000);
    }).then( response => {
        console.log(response);
        return contador('testando3', 2000);
    }).then( response => console.log(response));*/


let promises = [contador('testando1', 3000), 
                contador('testando2', 5000),
                contador('testando3', 2000)];

//Promise.all(promises).catch(resposta => console.log(resposta));
Promise.race(promises).then(function(valor) {console.log(valor)}).catch();