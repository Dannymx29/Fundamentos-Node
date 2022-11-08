function saludar() {
    console.log('hola mundo');
}

//module.exports = saludar; cuando se exporta como funcion

module.exports = {
    saludar,
    prop1: 'hola que tal'
};