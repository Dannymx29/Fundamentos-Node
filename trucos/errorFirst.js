function asincrona(callback){
    setTimeout(function() {
        try {
            let a = 3 + z
            callback(null, a);
        } catch (e) {
            callback(e);
        }
    }, 1000);
}

 asincrona(function (err, dato){
     if (err){
         console.error('Tenemos un error');
         console.error(err);
         return false;
     }
     console.log('todo ha ido bien, mi data es', dato);
 });

// try {
//     asincrona(function (err, dato){
//         if (err){
//             throw err;//solo funciona en sincronas no en asincronas
//         }
//         console.log('todo ha ido bien, mi data es', dato);
//     });
// } catch (e) {
//     console.error('hemos capturado un error');
//     console.error(e);
// }