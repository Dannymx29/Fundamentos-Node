
function otrafuncion(){
    return serompe();
}
function serompe(){
    return 3 + z;
}

function seRompeAsincrona(cb){
    setTimeout(function() {
        try {
            return 3 + z;
        } catch (err) {
            console.error('error en la funcion asincrona');
            cb(err);
        }
    }, 1500);
}

try{
    //otrafuncion();
    seRompeAsincrona(function(err){
        console.log(err.message)
    });
} catch(err){
    console.log('valla algo se ha roto');
    console.error(err.message);
    console.log('tranquilo capturamos el error');
}

console.log('esto esta por fuera del llamado a la funcion rota');