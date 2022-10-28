import argon2 from "argon2";

const verifyPassword = (req, res) => {
<<<<<<< HEAD
<<<<<<< HEAD
  argon2
    .verify(req.user.password_hash, req.body.password)
    .then((isVerified) => {
      if (isVerified) {
        res.send(req.user);
      } else {
        res.send("password error");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
=======
=======
>>>>>>> 92c213b020171e625d905b32f62151aff320cd46
    argon2
        .verify(req.user.password_hash, req.body.password)
        .then((isVerified) => {
            if (isVerified) {
                const {password_hash, ...user} = req.user
                res.send( user );
            } else {
                res.send('password error');
            }
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
<<<<<<< HEAD
>>>>>>> 1e76e84789dc264bb342b976ce91d3ec724e7a33
=======
>>>>>>> 92c213b020171e625d905b32f62151aff320cd46
};

export default verifyPassword;
