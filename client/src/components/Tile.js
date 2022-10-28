import React, { useEffect, useState } from 'react';

export const Tile = ({tile}) => {

    return (
        <div className={`tile col-1 ${tile.title}`} key={tile.id}>
            <div className="tile-name coords">
                {tile.x},{tile.y}
            </div>
        </div>
    )
}