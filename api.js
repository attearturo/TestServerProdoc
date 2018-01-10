const fs = require('fs'),
express = require('express'),
cliente = require('mongodb');

//=======================================================================
// creamos la variable api
var api = express.Router();

// definimos el comportamiento del root
api.get('/', (req,res) => {
 res.json({message: 'working'});
});

//=======================================================================
// conexion a base de datos por MongoDB Atlas
const url = 'mongodb://attearturo:clavecluster199697@attearturo-shard-00-00-svcox.mongodb.net:27017,attearturo-shard-00-01-svcox.mongodb.net:27017,attearturo-shard-00-02-svcox.mongodb.net:27017/admin?replicaSet=attearturo-shard-0&ssl=true';
var mongoClient = cliente.MongoClient;
// variable global para la base de datos
var db = null;

mongoClient.connect(url, (err,database) => {
    if(!err){
        console.log('MongoDB connected!');
        db = database;

        } else {
            console.log('Error de conexion a MondoDB')
        }
});

//=======================================================================
// rutas

api.route('/usuarios')
    .get((req, res) => {
        db.collection('usuarios')
            .find({})
            .toArray((err, usuarios) => {
                if (!err) {
                    res.json({
                        mensaje: 'ok',
                        usuarios: usuarios,
                    });
                } else {
                    res.json({ mensaje: 'error' });
                }
            });
    });

api.route('/login')
    .post((req, res) => {
        var target_user = {
            email: req.body.email,
            psw: req.body.psw
        };

        var target_editor = {
            editors: {
                $eleMatch: {
                    email: req.body.email,
                }
            }
        };
    });



module.exports = api;


