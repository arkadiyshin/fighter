import db from "../db/index.js";


export const getTiles = async (req, res) => {

    const result = await db.query(`SELECT * FROM tiles JOIN tile_types ON tiles.tile_type_id = tile_types.id`)
    if (result.rowCount > 0) {
        res.send(result.rows);
    } else {
        res.send('no result')
    }
    

}

export const createEmptyMap = async (req, res) => {
    const {width, height} = req.params;
    await db.query(`TRUNCATE tiles`)
    for(let x = 1; x <= width; x++) {
        for(let y = 1; y <= height; y++) {
            const result = await db.query(`INSERT INTO tiles (x, y) VALUES ($1, $2)`, [x, y]);
        }
    }

}