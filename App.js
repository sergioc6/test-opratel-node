// Cargar modulos y crear nueva aplicacion
var express = require("express"); 

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // soporte para bodies codificados en jsonsupport
app.use(bodyParser.urlencoded({ extended: true })); // soporte para bodies codificados
 

//Ejemplo: PUT http://localhost:8080/addUser
app.put('/addUser', function(req, res) {
   res.json({
       status_code: '0',
   });
});
 
//Ejemplo: POST http://localhost:8080/activateUser
app.post('/activateUser', function(req, res) {
   res.json({
       status_code: '0',
   });
});

//Ejemplo: POST http://localhost:8080/desactivateUser
app.post('/desactivateUser', function(req, res) {
   res.json({
       status_code: '0',
   });
});

//Ejemplo: GET http://localhost:8080/getUser
app.get('/getUser', function(req, res, next) {
   res.json({
       username: 'sergioc',
       password: '123456',
       email: 'sergiocabral.1990@gmail.com'
   });
});
 
  
var server = app.listen(8080, function () {
    console.log('El Servidor está corriendo..'); 
});