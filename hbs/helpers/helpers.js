var hbs = require('hbs');
hbs.registerHelper('getanio', ()=>{
     return new Date().getFullYear();
})
hbs.registerHelper('capitalizer', (texto)=>{
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
         palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
         
    });
    return palabras.join(' ')
})