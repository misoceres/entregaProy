const coneccion = require("../database");
module.exports = {
    listar:(callBack) =>{
        coneccion.query(
            'SELECT * FROM convocatorias',
            (error,results) =>{
                if (error) callBack (error);
                return callBack(null,results);
            }
        )
    },
    agregar:(datos,callBack)=>{
        coneccion.query(
            'insert into convocatorias (numero,semestre,fechalimite) values (?,?,?)',
            [datos.numero,datos.semestre,datos.fechalimite],
            (error,results,fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null,results[0]);
            }
        )
    },
}