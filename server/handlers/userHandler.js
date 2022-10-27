import db from "../db/index.js";

export const createUser = (req, res) => {
  const { username, password_hash } = req.body;
  db
    .query(
      "INSERT INTO users (username, password_hash) VALUES ($1, $2) RETURNING *",
      [username, password_hash]
    )
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the user");
    });
};


export const getUserByUserNameAndPassword = (req, res, next) => {
  const { username } = req.body;
  db
    .query("select * from users where username = $1", [username])
    .then((users) => {
      //console.log(users.rows)
      if (users.rows[0] != null) {
        req.user = users.rows[0];
        console.log(req.user)

        next();
      } else {
        res.send('Unknow user');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};
