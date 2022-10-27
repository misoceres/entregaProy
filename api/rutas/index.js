const express = require('express');
const ruta = express.Router();

ruta.get('/',(req,res)=>{
    res.status(200).send('Servidor Api');
});

module.exports=ruta;