function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log('hola '+ nombre);
            resolve(nombre);
        }, 1500);
    });
}

function hablar(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Bla bla bla bla');
            //resolve(nombre);
            reject('Hay un error.')
        }, 1000);
    })
}

function adios (nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('adios '+ nombre);
            resolve();
        }, 1000);
    });
}


console.log('iniciamos el proceso');
hola('DanntMx29')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
            console.log('termino el proceso');
        })
    .catch(error => {
        console.error('Ha habiedo un error');
        console.error(error);
    })