import db from "../db/index.js";


export const startGame = async (req, res) => {
    
    let { level_min, level_max } = req.query;
    
    if(!level_min)level_min = 0;
    if(!level_max)level_max =100;

    const result = await db.query(
        `SELECT 
            enemies.id as enemy_id,
            name as enemy_name, 
            level as enemy_level, 
            health as enemy_health, 
            strength as enemy_strength, 
            dexterity as enemy_dexterity, 
            intuition as enemy_intuition, 
            avatar_url as enemy_avatar_url
        FROM enemies 
        LEFT JOIN avatars 
        ON enemies.avatar_id = avatars.id  
        WHERE level between $1 and $2 
        ORDER BY random() limit 1;`
    , [level_min, level_max])
    
    if (result.rowCount > 0) {
        res.send(result.rows[0]);
    } else {
        res.send('no rows')
    }

}

export const finishGame = async (req, res) => {

    const { player_id, player_health, enemy_id, enemy_health } = req.body;

    console.log(req.body)

    // get current player points
    const playerResult = await db.query(`
        SELECT 
            username, 
            level, 
            experience, 
            free_points
        FROM users 
        WHERE users.id = $1`
        , [player_id])

    let playerRow;
    if (playerResult.rowCount > 0) {
        playerRow = playerResult.rows[0];
    } else {
        res.status(412).send('Unknown user');
    }

    console.log(playerRow)

    let newExperience = playerRow.experience;
    let newLevel = playerRow.level;
    let newFreePoints = playerRow.free_points;

    // get enemy points
    const enemyResult = await db.query(`
        SELECT 
            level, 
            health
        FROM enemies 
        WHERE enemies.id = $1`
        , [enemy_id])
    
    let enemyRow;
    if (enemyResult.rowCount > 0) {
        enemyRow = enemyResult.rows[0];
    } else {
        res.status(412).send('Unknown enemy');
    }

    console.log(enemyRow)


    // calculate new experience
    let changeExperience = 0;
    let fightResult = '';
    if( player_health > 0 ) {
        changeExperience = enemyRow.health * 10;
        fightResult = 'win';
    } else if(enemy_health > 0 ) {
        changeExperience = - enemy_health;
        fightResult = 'lose';
    } else {
        fightResult = 'draw';
    }
    newExperience += changeExperience;

    console.log(`new experience: ${newExperience}`)

    // check reaching new level
    const levelResult = await db.query(`
        SELECT 
            level, 
            experience,
            free_points
        FROM levels 
        WHERE levels.experience BETWEEN $1 AND $2`
        , [playerRow.experience, newExperience])

    if (levelResult.rowCount > 0) {
        const levelRow = levelResult.rows[0];
        console.log(levelRow)

        newLevel = levelRow.level;
        newFreePoints = playerRow.free_points + levelRow.free_points;
        console.log(`new level ${newLevel}`)
        console.log(`new free points ${newFreePoints}`)
    }

    const result = await db.query(`
        UPDATE users SET
            level = $1, 
            experience = $2, 
            free_points = $3
        WHERE users.id = $4`
        , [newLevel, newExperience, newFreePoints, player_id])

    if (result.rowCount > 0) {
        const changes = {
            level: newLevel,
            experience: newExperience,
            free_points: newFreePoints,
            changeExperience: changeExperience,
            fightResult: fightResult, 
        }
        console.log(changes)
        res.status(202).send(changes);
    } else {
        throw 'Unknown error';
    }

}