global.miVariable = 'elValor';
// console.log(global);
//console.log(process);
console.log(setInterval);
console.log(__dirname);
console.log(__filename);
console.log(miVariable);

let i = 0;

let intervalo = setInterval(function (){
    if( i === 3){
        clearInterval(intervalo);
    }
    console.log('Hola')
    i++;
}, 1000)

setImmediate(function(){
    console.log('soy inmediata o al instante')
})