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
    }
}