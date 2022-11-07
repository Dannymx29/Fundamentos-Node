// function soyAsincrona(miCallback){
//     setTimeout(function(){
//         console.log('estoy siendo asincrona');
//         miCallback();
//     }, 1000);
// }

// console.log('inicio proceso...');
// soyAsincrona(function(){
//     console.log('terminando proceso...');
// });


function hola(nombre, miCallback){
    setTimeout(function(){
        console.log('hola '+ nombre);
        miCallback(nombre);
    }, 1000);
}

function adios (nombre, otroCallback){
    setTimeout(function(){
        console.log('adios '+ nombre);
        otroCallback();
    }, 1000);
}

console.log('inicio proceso...');
hola('DannyMx29',function(nombre){
    adios(nombre, function(){
        console.log('terminando proceso...');
    })
});