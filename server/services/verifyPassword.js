import argon2 from "argon2";


const verifyPassword = (req, res) => {
    argon2
        .verify(req.user.password_hash, req.body.password)
        .then((isVerified) => {
            if (isVerified) {
                res.send("password right");
            } else {
                res.send('password error');
            }
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
};

export default verifyPassword;