function hola(nombre, miCallback){
    setTimeout(function(){
        console.log('hola '+ nombre);
        miCallback(nombre);
    }, 1000);
}

function hablar(callbackHablar){
    setTimeout(function(){
        console.log('Bla bla bla bla');
        callbackHablar();
    }, 1000);
}

function adios (nombre, otroCallback){
    setTimeout(function(){
        console.log('adios '+ nombre);
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callback){
    if (veces > 0){
        hablar(function() {
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }
    
}

console.log('inicio proceso...');

// hola('DannyMx29',function(nombre){
//     hablar(function(){
//         hablar(function(){
//             hablar(function(){
//                 adios(nombre, function(){
//                     console.log('terminando proceso...');
//                 })
//             });
//         });
//     });
// });

hola('DannyMx29', function(nombre){
    conversacion(nombre, 5, function(){
        console.log('procerso terminado');
    });
})