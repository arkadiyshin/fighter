import { useState } from "react";
import { TileStyled,TileHeroStyled } from "./Tile.styled";
import hero from "../assets/hero.png"
import { useSelector } from "react-redux";
import fighterSlice from "../redux/fighterSlice";


export const Tile = ({tile}) => {
    const fighter = useSelector((state) => state.fighterSlice);       
    
    return (
        <TileStyled title={tile.title}>  
               {/* <TileHeroStyled src={hero} alt=""/>                    */}
            {tile.x==fighter.x && tile.y==fighter.y ? <TileHeroStyled src={hero} alt=""/> : null }            
        </TileStyled>
    )
}