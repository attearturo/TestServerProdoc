// importamos los modulos de express, path, body-parser
const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
mongo = require('mongodb'),
fileUpload = require ('express-fileUpload');

//=======================================================================
// creamos la variable app y api
var app = express();
var api = require('./api.js');

app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json());
app.use('./api', api);

//=======================================================================
// definimos las carpetas de archivos estaticos
app.use('/public', express.static('public'));

// definimos el comportamiento del root
app.get('*', (req,res) => {
    //enviamos el arcchivo index.html
    res.sendfile(path.join(__dirname, 'public/index.html'));
})

//=======================================================================
// iniciamos el servidor en el puerto 4000
app.listen(4000, function () {
    console.log('Prodoc : Server localhost 4000')
})


