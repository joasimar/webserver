const express = require('express')
const app = express()
var hbs = require('hbs');

require('./hbs/helpers/helpers');
const port = process.env.PORT || 3000;
app.use( express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partials' );

app.set('view engine', 'hbs');
//helper


app.get('/',  (req, res) => {
   
  res.render('home',{
       nombre: 'joasimar',
  });
})
app.get('/about',  (req, res) => {
   
     res.render('about',{
     });
   })
app.listen(port,()=>{
     console.log('escuchando puerto '+port)
})