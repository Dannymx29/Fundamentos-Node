console.log('algo');
console.info('info');
console.error('error');
console.warn('warn');

var table = [
    {
        Nombre:'Danny',
        apellido: 'Mx',
        numero: 29
    },
    {
        Nombre:'churrumino',
        apellido:'contreras',
        numero: 52
    }
]

console.table(table);

console.group('converzacion');
console.log('Hola');
console.group('bla');
console.log('Bla bla bla bla');
console.log('Bla bla bla bla');
console.log('Bla bla bla bla');
console.groupEnd('bla');
console.log('Adios');
console.groupEnd('converzacion');
console.log('otra cosa de otra funcion');

function funcion1(){
    console.group('funcion1');
    console.log('esto es de la funcion 1');
    console.log('esto igual es de la funcion 1');
    funcion2();
    console.log('he vuelto a la funcion 1')
    console.groupEnd('funcion1');
}

function funcion2(){
    console.group('funcion2');
    console.log('esto es de la funcion 2');
    console.groupEnd('funcion2');
}

console.log('empezamos');
funcion1();

console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');