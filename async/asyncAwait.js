async function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log('hola '+ nombre);
            resolve(nombre);
        }, 1500);
    });
}

async function hablar(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Bla bla bla bla');
                resolve(nombre);
        }, 1000);
    })
}

async function adios (nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('adios '+ nombre);
            resolve();
        }, 1000);
    });
}

async function main(){
    let nombre = await hola('DannyMx29');
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('termina el proceso');
}

console.log('Inicio de proceso');
main();
console.log('Hilo principal');