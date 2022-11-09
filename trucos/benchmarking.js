console.time('todo');

console.time('bucle');
let suma = 0;
for (let i = 0; i< 10000000; i++){
    suma += 1;
}
console.timeEnd('bucle');


console.time('bucle2');
let suma2 = 0;
for (let j = 0; j< 1000000; j++){
    suma2 += 1;
}
console.timeEnd('bucle2');

console.log('inicial el proceso asincrono');
console.time('asincrona');

asincrona()
.then(() => {
    console.timeEnd('asincrona')
})

console.timeEnd('todo');

function asincrona(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('termina el proceso asincrono');
            resolve();
        });
    })
}