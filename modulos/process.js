process.on('beforeExit', () => {
    console.log('el proceso esta por terminar');
});

process.on('exit', () => {
    console.log('hey, el proceso termino');
    setTimeout(() => {
        console.log('esto no se ve porque ya nos desconectamos')
    }, 0);
});

setTimeout(() => {
    console.log('esto se ve porque aun no estamos descados')
}, 0);

process.on('uncaughtException', (err, origen) => {
    console.log('valla se nos fue un error');
    setTimeout(() => {
        console.log('esto sale dede las excepciones');
    }, 0);
});

funcionquenoexiste();

console.log('si el error no se atrapa esto no deberia verse');