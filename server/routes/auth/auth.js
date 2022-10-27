import express from 'express';
import argon2 from "argon2";


const hashingOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
}

export const hashPassword = (req, res, next) => {    
    argon2
        .hash(req.body.password, hashingOptions)
        .then((password_hash)=>{
            console.log(password_hash);
            req.body.password_hash = password_hash;
            delete req.body.password;            
            next();
        })
        .catch((err)=> {
            console.error(err);
            res.sendStatus(500);
        });
};

export const verifyPassword = (req, res) => {
    argon2
      .verify(req.user.password_hash, req.body.password)
      .then((isVerified) => {
        if (isVerified) {
          res.send("password right");
        } else {
          res.sendStatus(401).send('password error');
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };





const authRouter = express.Router();

export default authRouter;