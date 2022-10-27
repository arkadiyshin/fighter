import React from 'react';
import fighter from '../assets/images/fighter.png'
import { FighterStyled } from './Fighter.styled';

export const Fight = ()=> {
    return(
        <>
            <FighterStyled src={fighter} alt="" />
            <div>
                <div>
                    <h2>Attack</h2>
                </div>
                <div>
                    <h2>Defence</h2>
                </div>
            </div>
        </>
        
    )
}