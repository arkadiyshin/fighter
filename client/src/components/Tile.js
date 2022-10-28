
export const Tile = ({tile}) => {

    return (
        <div className={`tile col-1 ${tile.title}`}>
            <div className="tile-name coords">
                {tile.x},{tile.y}, {tile.title}, {tile.crossable}
            </div>
        </div>
    )
}