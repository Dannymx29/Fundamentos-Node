const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log('Nueva peticion!');
    console.log(req.url);

    switch (req.url){
        case '/ruta1':
            res.write('primer ruta');
            res.end();
            break;

        default:
            res.write('error 404 no se lo que necesitas');
            res.end();
    }

    // //cabeceras
    // res.writeHead(201, {'Content-type': 'text/plain'});

    // //respuesta al usuario
    // res.write('conexion http de nodeJs');

    // res.end();
}

console.log('Escuchando en el puerto 3000');