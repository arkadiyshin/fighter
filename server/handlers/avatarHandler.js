import db from "../db/index.js";


export const getAvatars = async (req, res) => {

    const filter = Object.entries( req.query );
    let text = `SELECT * FROM avatars`;
    text = filter.reduce( (acc, el, i) => acc + (i===0 ? ' WHERE ' : ' AND ') + `${el[0]} = $${i+1}`, text)
    console.log(text)
    const result = await db.query(text, filter.map( el => el[1] ) )
    if (result.rowCount > 0) {
        
        res.send(result.rows);
    } else {
        res.send('no result')
    }
    

}