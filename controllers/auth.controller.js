const JWT = require("jsonwebtoken");
const privateKey = "secretKey";


async function getjwtToken(req, res){
    
    ///Imaginar que hay una validaciÃ³n de usuario

    const payload = {
        userId: "abcd1234",
        exp: Date.now() + (60 * 1000) //Valida por treinta segundo

    };
    try{
        const tokenJwt = await JWT.sign(payload,privateKey, {algorithm: "HS256"});
    
        res.status(200).json({
            jwt:tokenJwt
        })

    }catch (err) {
        console.error(err);
        res.status(500).json({
            jwt: null
        })
    }

}

async function verifyToken(req,res,next){
    const authHeader = req.headers.authorization;
    const authToken = authHeader.replace("Bearer ","").replace("bearer ","")

    if (authHeader){
        console.log(authHeader)
        console.log(authToken)

        try {
            await JWT.verify(authToken, privateKey);
            next();
        } catch (error) {
            res.status(401).send("Credeniales erroneas");
        }
    }else{
        res.status(401).send("Credeniales erroneas");
    }


}

module.exports = {
    getjwtToken,
    verifyToken
}