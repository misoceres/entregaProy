const express = require('express');
const ruta = express.Router();
const cusuario = require('../controladores/usuario');

ruta.get('/listar',cusuario.listar);
ruta.post('/login',cusuario.login);
ruta.post('/modificar',cusuario.modificar);
ruta.post('/borrar',cusuario.borrar);
ruta.post('/agregar',cusuario.agregar);

module.exports=ruta;