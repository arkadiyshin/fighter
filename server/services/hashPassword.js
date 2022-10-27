import argon2 from "argon2";

const hashingOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
}

const hashPassword = (req, res, next) => {    
    argon2
        .hash(req.body.password, hashingOptions)
        .then((password_hash)=>{            
            req.body.password_hash = password_hash;
            delete req.body.password;            
            next();
        })
        .catch((err)=> {
            console.error(err);
            res.sendStatus(500);
        });
};

export default hashPassword;