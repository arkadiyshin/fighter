import db from "../db/index.js";


export const startGame = async (req, res) => {
    const { level_min, level_max } = req.query;
    const result = await db.query(`SELECT name as enemy_name, level as enemy_level, health as enemy_health, 
    strength as enemy_strength, dexterity as enemy_dexterity, intuition as enemy_intuition, avatar_url as enemy_avatar_url
    from enemies left join avatars on enemies.avatar_id = avatars.id  where level between $1 and $2 order by random() limit 1;`, [level_min, level_max])
    console.log(result)
    if (result.rowCount > 0) {
        
        res.send(result.rows[0]);
    } else {
        res.send('no rows')
    }
    

}

export const finishGame = async (req, res) => {
    const { user_id } = req.params;
    const result = await db.query(`SELECT username, level, experience, health, strength, dexterity, intuition, free_points, avatar_url
                                FROM users 
                                LEFT JOIN avatars
                                ON users.avatar_id = avatars.id
                                WHERE users.id = $1`, [user_id])
    if (result.rowCount > 0) {
        res.send(result.rows[0]);
    }

}