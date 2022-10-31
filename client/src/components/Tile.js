import { useState } from "react";
import { TileStyled,TileHeroStyled } from "./Tile.styled";
import hero from "../assets/hero.png"


export const Tile = ({tile}) => {
    //console.log(tile)
    const heroPlace = {
        x: 10,
        y: 10,
        name: "Fighter"
    }
    const [fighter, setFighter] = useState(hero);
    return (
        <TileStyled title={tile.title}>  
               {/* <TileHeroStyled src={hero} alt=""/>                    */}
            {tile.x==heroPlace.x && tile.y==heroPlace.y ? <TileHeroStyled src={hero} alt=""/> : null }            
        </TileStyled>
    )
}