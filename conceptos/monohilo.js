console.log('Hola mundo');

let i = 0;
setInterval(function(){
    console.log(i);
    i++;

    if (i === 4){
        z = 1
    }
    if (i === 5){
        var a = 3 + z;
    }
}, 1000);

console.log('segunda instruccion')