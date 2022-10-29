import { TileStyled } from "./Tile.styled";


export const Tile = ({tile}) => {
    //console.log(tile)
    return (
        <TileStyled title={tile.title}>
            <div>
            {/* {tile.x}, {tile.y} */}
            </div>
        </TileStyled>
    )
}