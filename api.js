import { read } from 'fs';

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
// rutas de peticion  All
// verifica si existe un usuario y todos los usuarios y todos los proyectos

api.route('/user/home')
    .all((req, res) => {
        var target_user = {
            email: req.body.email,
            psw: req.body.psw
        };

        var target_editor = {
            editors: {
                $elemMatch: {
                    email: req.body.email,
                }
            }
        };

        db.collection('users')
            .find(target_user)
            .toArray((err, users) => {
                if (err) throw err;
                if (users.length > 0) {

                    db.collection('projects')
                        .find(target_editor)
                        .toArray((error, usersProjects) => {
                            if(error) throw error;
                            if (usersProjects > 0) {
                                
                                res.json({
                                    response: 'valid',
                                    users: users,
                                    projects: usersProjects
                                });

                            } else {

                                res.json({
                                    response: 'valid',
                                    users: users,
                                });

                            }
                        });
                } else {

                    res.json({
                        response: 'invalid',
                    });

                }            
            });
    });

//=======================================================================
// rutas de modificacion POST

// verifica si existe un usuario y devuelve su nombre
api.route('/entry')
    .post((req, res) => {
        var target_user = {
            email: req.body.email
        };

        db.collection('users')
            .find(target_user)
            .toArray((err, users) => {
                if(err) throw err;
                if (users.length > 0) {

                    res.json({
                        response: 'valid',
                        user_name: users[0].name,
                    });

                } else {

                    res.json({
                        response: 'invalid',
                    });
                }
            });
    });

// verifica si existe un usuario y devuelve sus datos y proyectos
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

        db.collection('users')
            .find(target_user)
            .toArray((err, users) => {
                if (err) throw err;
                if (users.length > 0) {

                    db.collection('projects')
                        .find(target_editor)
                        .toArray((error, usersProjects) => {
                            if (error) throw error;
                            if (usersProjects > 0) {

                                res.json({
                                    response: 'valid',
                                    user: users[0],
                                    projects: usersProjects
                                });

                            } else {

                                res.json({
                                    response: 'valid',
                                    user: user[0],
                                });

                            }
                        });
                } else {

                    res.json({
                        response: 'invalid',
                    });

                }
            });

    });

// verifica si existe un usuario y devuelve sus datos y proyectos
api.route('/register')
    .post((req, res) => {
        var target_user = {
            email: req.body.email,
            psw: req.body.psw
        };

        db.collection('users')
            .find(target_user)
            .toArray((err, users) => {
                if (err) throw err;
                if (!err && users.lenght == 0) {
                    
                    if (!req.files) {
                        return res.json({ mensaje: 'Sin archivo' });
                    }

                    var new_user ={
                        name: req.body.name,
                        email:req.body.email,
                        psw: req.body.psw,
                        photo_url:req.body.photo_url
                    };

                    db.collection('users').insert(new_user, (errInsert) => {
                        if(!errInsert){
                            res.json({
                                mensaje: 'valid',
                                user: new_user
                            });
                        } else {
                            res.json({ mensaje: 'invalid' });
                        }
                    });
                }
            });
    });


module.exports = api;


