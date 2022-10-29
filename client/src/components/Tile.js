import { TileStyled } from "./Tile.styled";


export const Tile = ({tile}) => {
    //console.log(tile)
    return (
        <TileStyled title={tile.title}>
            <div>
            {/* {tile.x}, {tile.y} */}
            </div>
        {/* <div className={`tile col-1 ${tile.title}`}>
            <div className="tile-name coords">
                {tile.x}, {tile.y}, {tile.title}, {tile.crossable}
            </div>
        </div> */}
        </TileStyled>
    )
}