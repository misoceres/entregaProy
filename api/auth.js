const jwt = require("jsonwebtoken");

module.exports = {
    verificatoken:(req,res,next) =>{
        let token = req.get("authorization");
        if(token){
            token = token.slice(7);
            jwt.verify(token, process.env.SECRET,(err,decoded) =>{
                if(err)
                    return res.status(403).sent("Token Invalido");
                else {
                    req.decoded = decoded;
                    next();
                } 
            });
        } else return res.status(403).send("NO Existe Token");
    }
}