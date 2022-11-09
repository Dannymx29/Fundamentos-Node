const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log('Nueva peticion!');
    console.log(req.url);

    switch (req.url){
        case '/ruta1':
            let saludo = hola()
            res.write(saludo);
            res.end();
            break;

        default:
            res.write('error 404 no se lo que necesitas');
            res.end();
    }
}

function hola(){
    return 'hola que tal'
}

console.log('Escuchando en el puerto 3000');