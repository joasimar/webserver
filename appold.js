const http = require('http');

http.createServer((req, res)=>{
     res.writeHead(200,{'Content-Type': 'application/json'});
     let salida ={
          nombre: 'joasimar',
          edad: 21,
          url: req.url
     }
     res.write(JSON.stringify(salida));
     res.write('hola');
     res.end();
})
.listen(8080);
console.log('puerto 8080')