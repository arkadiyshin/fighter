import db from "../db/index.js";

export const createUser = (req, res) => {
  const { username, password_hash } = req.body;
  db.query(
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
  db.query("select * from users where username = $1", [username])
    .then((users) => {
      //console.log(users.rows)
      if (users.rows[0] != null) {
        req.user = users.rows[0];
        console.log(req.user);

        next();
      } else {
        res.send("Unknow user");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

export const checkIfUserNameExists = (req, res, next) => {
  const { username } = req.body;
  db.query("select * from users where username = $1", [username])
    .then((users) => {
      console.log(users.rows);
      if (users.rows.length > 0) {
        res.send("Such username already exists");
      } else {
        next();
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

export const getUser = async (req, res) => {
    const { id } = req.params;
    const result = await db.query(`SELECT id, username, level, experience, health, strength, dexterity, intuition, free_points, avatar_url
                                FROM users 
                                LEFT JOIN avatars
	                              ON users.avatar_id = avatars.id
                                WHERE users.id = $1`, [id])
    if (result.rowCount > 0) {
        res.send(result.rows[0]);
    }

}

export const updateProfile = async (req, res) => {

    const { id } = req.params;
    const { avatar_id } = req.body;

    const result = await db.query(`UPDATE users SET (avatar_id = $1) WHERE id = $2`, [avatar_url, id])
    if (result.rowCount > 0) {
        res.sendStatus(204);
    }

}

export const updateSkills = async (req, res) => {

    const { id } = req.params;
    const {
        free_points,
        health,
        strength,
        dexterity,
        intuition
    } = req.body;

    const result = await db.query(`UPDATE users SET health = $1, strength = $2, dexterity = $3, intuition = $4, free_points = $5 WHERE id = $6`,

        [health, strength, dexterity, intuition, free_points, id])
    if (result.rowCount > 0) {
        res.sendStatus(204);
    }

}