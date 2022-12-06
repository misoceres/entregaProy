const mconvocatorias = require('../modelo/convocatoria');


module.exports = {
    listar: (req,res) => {
        mconvocatorias.listar((err,results)=>{
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    },
    agregar: (req,res) =>{
        const body = req.body;
        console.log(body);
        mconvocatorias.agregar(body,(err,results) =>{
            if(err) return res.status(500).send("Error en la Base de Datos");
            return res.json({
                success: 1,
                data: results
            })
        });
    },
}