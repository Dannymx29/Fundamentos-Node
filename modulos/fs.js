const fs = require('fs');

function leer(ruta, cb){
    fs.readFile(ruta, (err, data) => {
        cb(data);
        cb(data.toString());
    })
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function(err){
        if(err){
            console.log('No pude crear el archivo.', err);
        } else {
            console.log('se a escrito correctamente');
        }
    });
}
function borrar(ruta, cb){
    fs.unlink(ruta, cb);
}

//escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log('se ha escrito correctamente'));
//leer(__dirname + '/archivo.txt', console.log);
borrar(__dirname + '/archivo1.txt', console.log);